export async function loadT2DMKnowledge() {

    const response = await fetch("../knowledge/t2dm.json");

    if (!response.ok) {
        throw new Error("Failed to load t2dm.json");
    }

    return await response.json();

}