package util

import (
	"math/rand"
	"time"
)

func RandomString(n int) string {
	letters := []byte("qazxswedcvfrtgbnhyujmkiolpQAZXSWEDCVFRTGBNHYUJMKIOLP")
	result := make([]byte, n)

	rand.Seed(time.Now().Unix())
	for i := range result {
		result[i] = letters[rand.Intn(len(letters))]
	}

	return string(result)
}
