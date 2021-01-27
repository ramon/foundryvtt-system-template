export const preloadTemplates = async () => {
    const templatePaths = [
        // Add paths to "systems/<MY-SYSTEM>/templates"
    ]

    return loadTemplates(templatePaths)
}