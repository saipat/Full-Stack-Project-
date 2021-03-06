# == Schema Information
#
# Table name: notes
#
#  id             :bigint(8)        not null, primary key
#  title          :string           not null
#  notebook_id    :integer          not null
#  plain_txt_body :text             not null
#  rich_txt_body  :text             not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

class Note < ApplicationRecord
    # validate :notebook_id_null
    validates :title, :notebook_id, presence: true


    belongs_to :notebook,
        foreign_key: :notebook_id,
        class_name: 'Notebook'

    has_many :tags_notes,
        inverse_of: :note, 
        dependent: :destroy

    has_many :tags,
        through: :tags_notes, 
        source: :tag
    
end
