# Require any additional compass plugins here.
environment = :development # or :production
# Set this to the root of your project when deployed:
sass_dir = ""
project_path = File.expand_path(File.join(File.dirname(__FILE__), '.'))
http_path = "."
assets_dir = http_path + ""
images_dir = assets_dir + ""
css_dir = assets_dir + ""
fonts_dir = assets_dir + ""
javascripts_dir = assets_dir + ""

# You can select your preferred output style here (can be overridden via the command line):
output_style = (environment == :production) ? :compressed : :expanded
# To enable relative paths to assets via compass helper functions. Uncomment:
relative_assets = true

# To disable debugging comments that display the original location of your selectors. Uncomment:
line_comments = (environment == :production) ? false : true

# If you prefer the indented syntax, you might want to regenerate this
# project again passing --syntax sass, or you can uncomment this:
# preferred_syntax = :sass
# and then run:
# sass-convert -R --from scss --to sass sass scss && rm -rf sass && mv scss sass

# set the css file encoding
Encoding.default_external = "utf-8"

