module.exports = {
    connect: (mapStateToProps, mapDispatchToProps) => component => ({
        mapStateToProps,
        mapDispatchToProps,
        component
    }),
    Provider: ({ children = null }) => children
};
