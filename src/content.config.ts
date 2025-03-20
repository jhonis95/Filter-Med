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
        home_service_header_card:z.array(z.object({
            card_title:z.string(),
            card_content:z.string(),
            background_image:image(),
            link:z.string()
        })),
        home_chorume_service_card:z.object({
            button_content:z.string(),
            card_data:z.array(z.object({
                card_name:z.string(),
                card_title:z.string(),
                card_content:z.string(),
                card_image:image(),
                button_link:z.string(),
            }))
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

        home_oil_service_section:z.object({
            oil_service_image:image(),
            title:z.string(),
            paragraphs:z.array(z.object({
                paragraph_content:z.string()
            })),
            bullet_points:z.array(z.object({
                bullet_point_content:z.string()
            })),
            button_text:z.string(),
            button_link:z.string()
        }),
        home_service_cards:z.array(z.object({
            service_name:z.string(),
            service_image:image()
        })),
        second_section_title:z.string(),
        second_section_subtitle:z.string(),
        home_product_cards:z.array(z.object({
            product_card_name:z.string(),
            product_card_content:z.string(),
            product_card_image:image(),
            link:z.string()
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
    })
})

const service_page = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/cms/service_page" }),
    schema:({image})=>z.object({
        title: z.string(),
        headertitle:z.string(),
        subtitle:z.string(),
        background_image:image(),
        oil_section:z.object({
            introduction_section:z.object({
                title:z.string(),
                paragraphs:z.array(z.object({
                    content:z.string()
                })),
                main_image:image()
            }),
            card_section:z.object({
                title:z.string(),
                service_card:z.array(z.object({
                    card_title:z.string(),
                    card_content:z.string()
                })),
            }),
            call_to_action:z.object({
                content:z.string(),
                button_text:z.string(),
                button_link:z.string()
            })
        }),
        chorume_section:z.object({
            introduction_section:z.object({
                title:z.string(),
                paragraphs:z.array(z.object({
                    content:z.string()
                })),
                main_image:image()
            }),
            card_section:z.object({
                title:z.string(),
                card:z.array(z.object({
                    card_title:z.string(),
                    card_content:z.string()
                })),
            }),
            chorume_section_detail:z.array(z.object({
                title:z.string(),
                content:z.string(),
                main_image:image(),
                button_text:z.string(),
                button_link:z.string()
            }))
        }),
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
const navigation_bar = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/cms/navigation_bar" }),
    schema:({image})=>z.object({
        logo_container:z.object({
            text:z.string(),
            logo:image()
        }),
        navigation:z.array(z.object({
            text:z.string()
        }))
    })
})

const footer_bar = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/cms/footer" }),
    schema:({image})=>z.object({
        footer_social_media:z.object({
            text:z.string(),
            social_media_list:z.array(z.object({
                social_media_image:image(),
                link:z.string()
            }))
        }),
        footer_navigation:z.object({
            name:z.string(),
            navigation:z.array(z.object({
                text:z.string(),
            }))
        }),
        footer_address:z.object({
            adress_title:z.string(),
            adress_text:z.string(),
            phone_title:z.string(),
            phone_number:z.string(),
        }),
        copyright:z.string()
    })
})

const service_detail = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/cms/service_detail_page" }),
    schema:({image})=>z.object({
        header_title:z.string(),
        page_data:z.object({
            page_topics:z.array(z.object({
                topic:z.string(),
                subtitle:z.string(),
                background_image:image(),
                about_system_section:z.object({
                    title:z.string(),
                    paragraphs:z.array(z.object({
                        paragraph:z.string()
                    })),
                    image:image()
                }),
                advantage_section:z.object({
                    title:z.string(),
                    subtitle:z.string(),
                    advantages:z.array(z.object({
                        advantage:z.string()
                    })),
                    button_text:z.string(),
                    images:z.array(z.object({
                        image:image()
                    }))
                }),
                tecnical_section:z.object({
                    title:z.string().optional(),
                    subtitle:z.string().optional(),
                    paragraphs:z.array(z.object({
                        paragraph:z.string().optional()
                    })).optional(),
                    image:image().optional()
                }).optional()
            }))
        }),
    })
})
const oil_filter_page= defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/cms/oil_filter_detail_page" }),
    schema:({image})=>z.object({
        title: z.string(),
        headertitle:z.string(),
        subtitle:z.string(),
        background_image:image(),
        main_title:z.string(),
        cards:z.array(z.object({
            image:image(),
            name:z.string(),
            paragraphs:z.array(z.object({
                paragraph:z.string()
            })),
            main_points:z.array(z.object({
                title:z.string(),
                paragraphs:z.array(z.object({
                    paragraph:z.string()
                })),
            })),
            bullet_points:z.array(z.object({
                content:z.string()
            })).optional()
        })),
        call_to_action:z.object({
            content:z.string(),
            button_text:z.string(),
            button_link:z.string(),
            background_image:image()
        })

    })
})
export const collections={
    home_page,
    product_page,
    service_page,
    about_page,
    product_detail,
    navigation_bar,
    footer_bar,
    service_detail,
    oil_filter_page
}