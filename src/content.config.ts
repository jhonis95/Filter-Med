import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders'; // Not available with legacy API

const home_page = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/cms/home_page" }),
    schema:({ image }) => z.object({
        title: z.string(),
        headertitle:z.string(),
        subtitle:z.string(),
        background_image:image(),
        home_header_card:z.object({
            card_title:z.string(),
            card_subtitle:z.string(),
            card_button_text:z.string()
        }),
        home_product_card:z.object({
            card_title:z.string(),
            card_subtitle:z.string(),
            card_button_text:z.string(),
            background_image:image()
        }),
        home_process_card:z.object({
            card_subtitle:z.string(),
            card_title:z.string(),
            card_content:z.string(),
            card_button_text:z.string(),
            card_image:image()
        }),
        first_section_title:z.string(),
        first_section_subtitle:z.string(),
        home_service_cards:z.array(z.object({
            service_name:z.string(),
            service_image:image()
        })),
        second_section_title:z.string(),
        second_section_subtitle:z.string(),
        home_product_division:z.object({
            home_product_division_title:z.string(),
            home_product_division_types:z.object({
                type1:z.string(),
                type2:z.string(),
                type3:z.string(),
                type4:z.string()
            })
        }),
        home_product_cards:z.array(z.object({
            product_card_name:z.string(),
            product_card_content:z.string(),
            product_card_image:image()
        }))
    })
})
const product_page = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/cms/product_page" }),
    schema:({image})=>z.object({
        title: z.string(),
        headertitle:z.string(),
        subtitle:z.string(),
        background_image:image(),
        product_header_card:z.object({
            card_text:z.string(),
            card_button_text:z.string()
        }),
        section_title:z.string(),
        first_subtitle:z.string(),
        product_section_card:z.array(z.object({
            card_title:z.string(),
            card_content:z.string(),
            card_link:z.string(),
            card_image:image()
        })),
        second_subtitle:z.string(),
        product_service_card:z.object({
            card_content:z.string(),
            card_button_text:z.string(),
            card_image:image()
        })
    })
})

const service_page = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/cms/service_page" }),
    schema:({image})=>z.object({
        title: z.string(),
        headertitle:z.string(),
        subtitle:z.string(),
        background_image:image(),
        main_content:z.string(),
        main_image:image(),
        section_title:z.string(),
        service_card:z.array(z.object({
            card_title:z.string(),
            card_content:z.string(),
        })),
        product_service_card:z.object({
            card_content:z.string(),
            card_button_text:z.string(),
            card_image:image()
        })
    })
})
const about_page = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/cms/about_page" }),
    schema:({image})=>z.object({
        title: z.string(),
        headertitle:z.string(),
        subtitle:z.string(),
        background_image:image(),
        first_section:z.object({
            first_section_title:z.string(),
            first_section_content_one:z.string(),
            first_section_content_two:z.string(),
            first_section_image:image()
        }),
        second_section:z.object({
            second_section_title:z.string(),
            about_card:z.array(z.object({
                card_title:z.string(),
                card_content:z.string()
            }))
        }),
        third_section:z.object({
            third_section_title:z.string(),
            third_section_content_one:z.string(),
            third_section_content_two:z.string(),
            third_section_content_tree:z.string()
        }),
        card_button_text:z.string()
    })
})

const product_detail = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/cms/product_detail" }),
    schema:({image})=>z.object({
        title: z.string(),
        headertitle:z.string(),
        subtitle:z.string(),
        background_image:image(),
        filter_media_products:z.object({
            product_detail_header_card:z.object({
                card_title:z.string(),
                card_content:z.string(),
            }),
            section_title:z.string(),
            product_list:z.array(z.object({
                product_name:z.string(),
                product_description:z.string(),
                product_image:image()
            }))
        }),
        complementaty_products:z.object({
            product_detail_header_card:z.object({
                card_title:z.string(),
                card_content:z.string(),
            }),
            section_title:z.string(),
            product_list:z.array(z.object({
                product_name:z.string(),
                product_description:z.string(),
                product_image:image()
            }))
        }),
        lab_filtration_equipment_products:z.object({
            product_detail_header_card:z.object({
                card_title:z.string(),
                card_content:z.string(),
            }),
            section_title:z.string(),
            product_list:z.array(z.object({
                product_name:z.string(),
                product_description:z.string(),
                product_image:image()
            }))
        }),
        filer_presses_and_housing_products:z.object({
            product_detail_header_card:z.object({
                card_title:z.string(),
                card_content:z.string(),
            }),
            section_title:z.string(),
            product_list:z.array(z.object({
                product_name:z.string(),
                product_description:z.string(),
                product_image:image()
            }))
        }),
        product_detail_card:z.object({
            card_title:z.string(),
            card_subtitle:z.string(),
            card_button_text:z.string(),
        }),
    })
})

export const collections={
    home_page,
    product_page,
    service_page,
    about_page,
    product_detail,
}