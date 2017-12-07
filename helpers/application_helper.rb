module ApplicationHelper

  # Fix the bug between i18n, dynamic page and directory_indexes
  def proxy_url(path)
    if locale == I18n.default_locale
      return '/' + t('paths.projects') + '/' + path
    else
      return '/' + locale.to_s + '/' + t('paths.projects') + '/' + path
    end
  end

  def project_image(project, image, alt)
    return image_tag "#{project[I18n.default_locale].slug}/#{image}", :alt => project[locale.to_s].name + alt
  end

end
