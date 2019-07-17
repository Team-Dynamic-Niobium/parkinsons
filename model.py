import tensorflow as tf
from tensorflow import keras
import yaml

with open('layersize.yml', 'r') as stream: #open the rules from file and send it to a dataframe
            layersize = yaml.safe_load(stream)

def makemodel():
	trained = tf.keras.models.Sequential([
	#keras.layers.Flatten(input_shape=(121, 6)),
	keras.layers.Dense(layersize, activation=tf.nn.relu),
	keras.layers.Dense(2, activation=tf.nn.softmax)
	])
	trained.compile(optimizer='adam',
	              loss='sparse_categorical_crossentropy',
	              metrics=['accuracy'])
	return trained
	
