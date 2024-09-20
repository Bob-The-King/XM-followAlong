const sortTestimonials = require("../util/sort-testimonials");

describe("sortTestimonials", () => {
    const unsortedTestimonials = [
        { feedback: "Increadible! Just Amazing", rating: 5 },
        { feedback: "At least it was cheap", rating: 3 },
        { feedback: "That one guy was too funny for me to concentrate", rating: 0 }
    ]
    it("sorts testimonials by feedback aplphabetically", () => {
        const expectedSorting = [
            { feedback: "At least it was cheap", rating: 3 },
            { feedback: "Increadible! Just Amazing", rating: 5 },
            { feedback: "That one guy was too funny for me to concentrate", rating: 0 }
        ]

        const actualSorting = sortTestimonials(unsortedTestimonials, "nameAsc");

        expect(actualSorting).toEqual(expectedSorting);
    })

    it("sorts testimonials by decreasing rating", () => {
        const expectedSorting = [
            { feedback: "Increadible! Just Amazing", rating: 5 },
            { feedback: "At least it was cheap", rating: 3 },
            { feedback: "That one guy was too funny for me to concentrate", rating: 0 }
        ]

        const actualSorting = sortTestimonials(unsortedTestimonials, "ratingDesc");

        expect(actualSorting).toEqual(expectedSorting);
    })

    it("sorts testimonials by increasing rating", () => {
        const expectedSorting = [
            { feedback: "That one guy was too funny for me to concentrate", rating: 0 },
            { feedback: "At least it was cheap", rating: 3 },
            { feedback: "Increadible! Just Amazing", rating: 5 }
        ]

        const actualSorting = sortTestimonials(unsortedTestimonials, "ratingAsc");

        expect(actualSorting).toEqual(expectedSorting);
    })
})