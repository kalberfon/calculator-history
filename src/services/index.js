const Core = () => {
    const onCalcule = (string) => {
        const result = eval(string);

        return {
            historyItem: `${string} = ${result}`,
            result: result
        }
    }
    const onReset = (string) => {
        return {
            result: ""
        }
    }

    return {
        onCalcule,
        onReset
    }
}

export default Core;