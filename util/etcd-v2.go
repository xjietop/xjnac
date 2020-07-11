package util

import (
	"context"
	"github.com/coreos/etcd/client"
	"log"
)

func EtcdV2Get(endpoints []string, key string) map[string]string {
	for i, endp := range endpoints {
		if endp[:4] != "http" {
			endpoints[i] = "http://" + endp
		}
	}
	cli, err := client.New(client.Config{
		Endpoints: endpoints,
	})
	if err != nil {
		log.Println("connect failed, err:", err)
		return nil
	}
	kapi := client.NewKeysAPI(cli)
	resp, err := kapi.Get(context.Background(), key, &client.GetOptions{
		Recursive: true,
	})
	if err != nil {
		log.Println("connect failed, err:", err)
		return nil
	}
	m := make(map[string]string)
	for _, node := range resp.Node.Nodes {
		m[node.Key] = node.Value
		if node.Nodes != nil {
			for _, node2 := range node.Nodes {
				m[node2.Key] = node2.Value
				if node2.Nodes != nil {
					for _, node3 := range node2.Nodes {
						m[node3.Key] = node3.Value
					}
				}
			}
		}
	}
	return m
}
