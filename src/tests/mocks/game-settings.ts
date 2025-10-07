export const settings = {
    id: 129,
    name: "WildWestMostWanted",
    tolgeeNamespaces: ["WildWestMostWanted", "cascadingslot"],
    durations: {
        wholeRound: 14,
        lockingBet: 3,
        placingBet: 10,
        generatingResult: 0,
        startRound: 1,
        bigWinNotice: 5,
        normalWinNotice: 3,
        loseNotice: 1,
    },
    isMiniGame: false,
    numberOfRoundHistory: 11,
    observerNamespace: "WildWestMostWanted",
    validateBalanceWhenBet: true,
};

export const containerOptions = {
    globalContainer: {},
    onContainerCreated: jest.fn(),
    features: [],
};
