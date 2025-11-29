
/**
 * An audio worklet processor that records the PCM audio data sent from the main thread
 * to a buffer and plays it.
 
 * Took inspiration from google adk streaming docs
 */

class PCMProcessor extends AudioWorkletProcessor {
    constructor() {
        super();
    }

    process(inputs, outputs, parameters) {
        if (inputs.length > 0 && inputs[0].length > 0) {
            // Use the first channel
            const inputChannel = inputs[0][0];
            // Copy the buffer to avoid issues with recycled memory
            const inputCopy = new Float32Array(inputChannel);
            this.port.postMessage(inputCopy);
        }
        return true;
    }
}

registerProcessor("pcm-recorder-processor", PCMProcessor);