require 'test_helper'

class ReactPageControllerTest < ActionDispatch::IntegrationTest
  test "should get root" do
    get react_page_root_url
    assert_response :success
  end

end
