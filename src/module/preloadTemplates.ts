export const preloadTemplates = async () => {
    const templatePaths: string[] = [
        // Add paths to "systems/<MY-SYSTEM>/templates"
    ]

    return loadTemplates(templatePaths)
}