import { createClient } from '@sanity/client';

import groq from 'groq';

import { PUBLIC_SANITY_DATASET, PUBLIC_SANITY_PROJECT_ID } from '$env/static/public';

if (!PUBLIC_SANITY_PROJECT_ID || !PUBLIC_SANITY_DATASET) {
	throw new Error('Did you forget to run sanity init --env?');
}

export const client = createClient({
	projectId: PUBLIC_SANITY_PROJECT_ID,
	dataset: PUBLIC_SANITY_DATASET,
	useCdn: false, // `false` if you want to ensure fresh data
	apiVersion: '2023-03-20' // date of setup
});

// const projectShowcase = `_type == 'projectShowcase' => {
// 	projects[] {
// 		isHighlighted,
// 		'projectData': coalesce(
// 			project->{
// 				...,
// 				...projectInfo,
// 			},
// 			projectInfo)
// 	}
// }`;

// const accordion = `_type == 'accordion' => {
// 	items[] {
// 		title,
// 		icon,
// 		content,
// 		'links': ctaLinks[] {
// 			title,
// 			'link': select(
// 				url.variant == 'internal' => url.internal->{
// 					'url': select(
// 						_type == 'service' => '/tjenester/',
// 						_type == 'project' => '/prosjekter/',
// 						'/'
// 					) + slug.current,
// 				},
// 				url.variant == 'external' => url{
// 					'url': external
// 				}
// 			)
// 		}
// 	}
// }`;

// const teaser = `_type == 'teaser' => {
// 	'ctaButton': ctaButton {
// 		title,
// 		'link': select(
// 			url.variant == 'internal' => url.internal->{
// 				'url': select(
// 					_type == 'service' => '/tjenester/',
// 					_type == 'project' => '/prosjekter/',
// 					'/'
// 				) + slug.current,
// 			},
// 			url.variant == 'external' => url{
// 				'url': external
// 			}
// 		)
// 	}
// }`;

// const aboutGrid = `_type == 'aboutGrid' => {
// 	gridItems[] {
// 		variant,
// 		'data': select(
// 			variant == 'employee' => employeeCard->{
// 				name,
// 				role,
// 				email,
// 				phone,
// 				'image': image.image
// 			},
// 			variant == 'image' => imageCard.image,
// 			variant == 'infoCard' => infoCard {
// 				'backgroundColor': backgroundColors.backgroundColor,
// 				text,
// 			}
// 		)
// 	}
// }`;

// const blocksGroq = `
// 	'blocks': blocks.blocks[] {
// 		...,
// 		${projectShowcase},
// 		${accordion},
// 		${teaser},
// 		${aboutGrid},
// 	}
// `;

export async function getPosts() {
	return await client.fetch(
		groq`*[_type == "post" && defined(slug.current)] | order(_createdAt desc)`
	);
}

export async function getPost(slug) {
	return await client.fetch(groq`*[_type == "post" && slug.current == $slug][0]`, {
		slug
	});
}

export async function getHeader() {
	return await client.fetch(
		groq`*[_type == "siteSettings"]{
      logo {
        asset
      },
      mainMenu[]->,
			navCTA,
    }`
	);
}

export async function getContactInformation() {
	return await client.fetch(
		groq`*[_type == "siteSettings"]{
			contactInformation {
				...
			}
		}`
	);
}

export async function getFrontPage() {
	return await client.fetch(
		groq`*[_type == 'frontPage'][0] {
			'blocks': blocks.blocks[]{
				_type,
				_type == 'hero' => {
					title,
					lead,
					'image': image.image,
					'cta': cta[] {
						title,
						'link': select(
							url.variant == 'internal' => url.internal->{
								'url': select(
									_type == 'service' => '/tjenester/',
									_type == 'project' => '/prosjekter/',
									'/'
								) + slug.current,
							},
							url.variant == 'external' => url{
								'url': external
							}
						)
					}
				},
				_type == 'teaser' => {
					variant,
					title,
					lead,
					body,
					cta,
					images
				},
				_type == 'servicesBlock' => {
					Services[] {
						title,
						featuredImage,
						icon,
						link-> {
							type,
							slug,
						}
					},
					sertificates {
						title,
						sertificates,
						'cta': cta {
							title,
							'link': select(
								url.variant == 'internal' => url.internal->{
									'url': select(
										_type == 'service' => '/tjenester/',
										_type == 'project' => '/prosjekter/',
										'/'
									) + slug.current,
								},
								url.variant == 'external' => url{
									'url': external
								}
							)
						}
					}
				},
				_type == 'partners' => {
					title,
					partners[] {
						logo
					},
				},
				_type == 'sertificates' => {
					title,
					image,
					sertificates[] {
						logo
					}
				},
				_type == 'ctaBlock' => {
					variant,
					'image': image.image,
					title,
					lead,
					body,
					'cta': cta[] {
						title,
						'link': select(
							url.variant == 'internal' => url.internal->{
								'url': select(
									_type == 'service' => '/tjenester/',
									_type == 'project' => '/prosjekter/',
									'/'
								) + slug.current,
							},
							url.variant == 'external' => url{
								'url': external
							}
						)
					}
				},
				_type == 'simpleCTA' => {
					title,
					'cta': cta[] {
						title,
						'link': select(
							url.variant == 'internal' => url.internal->{
								'url': select(
									_type == 'service' => '/tjenester/',
									_type == 'project' => '/prosjekter/',
									'/'
								) + slug.current,
							},
							url.variant == 'external' => url{
								'url': external
							}
						)
					}
				},
				_type == 'content' => {
					content
				},
				_type == 'cardGrid' => {
					showSertificates,
					cards[] -> {
						_type,
						slug,
						title,
						'image': featuredImage.image,
						icon,
					},
					sertificates {
							title,
							sertificates,
							'cta': cta {
								title,
								'link': select(
									url.variant == 'internal' => url.internal->{
										'url': select(
											_type == 'service' => '/tjenester/',
											_type == 'project' => '/prosjekter/',
											'/'
										) + slug.current,
									},
									url.variant == 'external' => url{
										'url': external
									}
								)
							}
						}
				},
				_type == 'quote' => {
					quote,
					quotee,
				},
				_type == 'uspsBlock' => {
					title,
					lead,
					usps[],
					googleRating,
					ctaTitle,
					cta,
				},
			}
		}`
	);
}

export async function getFooter() {
	return await client.fetch(
		groq`*[_type == "siteSettings"]{
			footer {
				aboutUs[]->,
				services[]->,
				places[]->,
				logos[] {
					logo
				},
				'secondaryMenu': secondaryMenu.menuItems[] {
					title,
					'variant': url.variant,
					'link': select(
						url.variant == 'internal' => url.internal->{
							'url': select(
								_type == 'service' => '/tjenester/',
								_type == 'project' => '/prosjekter/',
								'/'
							) + slug.current,
						},
						url.variant == 'external' => url{
							'url': external
						}
					)
				}
			}
		}`
	);
}

export async function getPage(slug) {
	return await client.fetch(
		groq`*[(_type == "page" || _type == "service" || _type == 'place') && slug.current == $slug][0]{
			'page': {
				title,
				'blocks': blocks.blocks[]{
					_type,
					_type == 'hero' => {
						title,
						lead,
						'image': image.image,
						'cta': cta[] {
							title,
							'link': select(
								url.variant == 'internal' => url.internal->{
									'url': select(
										_type == 'service' => '/tjenester/',
										_type == 'project' => '/prosjekter/',
										'/'
									) + slug.current,
								},
								url.variant == 'external' => url{
									'url': external
								}
							)
						}
					},
					_type == 'teaser' => {
						variant,
						title,
						lead,
						body,
						cta,
						images
					},
					_type == 'servicesBlock' => {
						Services[] {
							title,
							featuredImage,
							icon,
							link-> {
								type,
								slug,
							}
						},
						sertificates {
							title,
							sertificates,
							'cta': cta {
								title,
								'link': select(
									url.variant == 'internal' => url.internal->{
										'url': select(
											_type == 'service' => '/tjenester/',
											_type == 'project' => '/prosjekter/',
											'/'
										) + slug.current,
									},
									url.variant == 'external' => url{
										'url': external
									}
								)
							}
						}
					},
					_type == 'partners' => {
						title,
						partners[] {
							logo
						},
					},
					_type == 'sertificates' => {
						title,
						image,
						sertificates[] {
							logo
						}
					},
					_type == 'ctaBlock' => {
						variant,
						'image': image.image,
						title,
						lead,
						body,
						'cta': cta[] {
							title,
							'link': select(
								url.variant == 'internal' => url.internal->{
									'url': select(
										_type == 'service' => '/tjenester/',
										_type == 'project' => '/prosjekter/',
										'/'
									) + slug.current,
								},
								url.variant == 'external' => url{
									'url': external
								}
							)
						}
					},
					_type == 'simpleCTA' => {
						title,
						'cta': cta[] {
							title,
							'link': select(
								url.variant == 'internal' => url.internal->{
									'url': select(
										_type == 'service' => '/tjenester/',
										_type == 'project' => '/prosjekter/',
										'/'
									) + slug.current,
								},
								url.variant == 'external' => url{
									'url': external
								}
							)
						}
					},
					_type == 'content' => {
						content
					},
					_type == 'cardGrid' => {
						showSertificates,
						cards[] -> {
							_type,
							slug,
							title,
							'image': featuredImage.image,
							icon,
						},
						sertificates {
							title,
							sertificates,
							'cta': cta {
								title,
								'link': select(
									url.variant == 'internal' => url.internal->{
										'url': select(
											_type == 'service' => '/tjenester/',
											_type == 'project' => '/prosjekter/',
											'/'
										) + slug.current,
									},
									url.variant == 'external' => url{
										'url': external
									}
								)
							}
						}
					},
					_type == 'quote' => {
						quote,
						quotee,
					},
					_type == 'uspsBlock' => {
						title,
						lead,
						usps[],
						googleRating,
						ctaTitle,
						cta,
					},
				}
			}
		}`,
		{
			slug
		}
	);
}
