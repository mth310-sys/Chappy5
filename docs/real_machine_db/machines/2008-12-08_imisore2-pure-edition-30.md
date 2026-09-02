# いみそ～れ2 ピュアエディション30

machineName: いみそ～れ2 ピュアエディション30
manufacturer: エマ
releaseDate: 2008-12-08
generation: 5号機
systemType: ノーマル / 完全告知 / ボーナス主体
variant: 30φ / プレミアムビスカス
modelCode: UNVERIFIED_AFTER_RESEARCH（25φはP-WORLDでイミソーレ2Hを確認。30φへ型式名を自動転記しない）
settings: 1 / 2 / 3 / 4 / 5 / 6

## 性能コア

payoutRateBySetting:
- シリーズ共通解析・シミュレート値（パチマガスロマガ）: 設定1 96.92% / 設定2 98.54% / 設定3 100.74% / 設定4 104.64% / 設定5 107.75% / 設定6 111.55%
- 25φ市場掲載値（参考・30φへ無条件転記しない）: 96.7 / 98.4 / 100.7 / 104.4 / 107.7 / 112.0%
- status: ANALYSIS_HIGH_SERIES_COMMON。業界一次資料が25φ/30φを同一ピュア・エディションとして同じ合成・獲得性能で説明しており、パチマガスロマガも径を分けずピュア・エディション性能として掲載。30φ単独P-WORLD表の独立回収は未達。

initialHitBySetting:
- BIG: 1/318.1 / 1/309.1 / 1/297.9 / 1/277.7 / 1/264.3 / 1/248.2
- REG: 1/337.8 / 1/327.7 / 1/321.3 / 1/297.9 / 1/282.5 / 1/262.1
- 合成: 1/163.8 / 1/159.1 / 1/154.6 / 1/143.7 / 1/136.5 / 1/127.5
- 根拠: パチマガスロマガのピュア・エディション共通解析 + グリーンべるとの25φ/30φ共通ピュア・エディション説明。

baseGamesPer50:
- 設定1 36.37G
- 設定2 36.67G
- 設定3 37.28G
- 設定4 37.73G
- 設定5 38.23G
- 設定6 38.55G
- 根拠: パチマガスロマガのピュア・エディション共通解析。30φ単独ページの独立裏取りはQA対象。

netIncrease: NOT_APPLICABLE（RT/ART非搭載のピュア・エディション）

basicPayout:
- BIG: 345枚超払い出し終了 / 純増約312枚
- REG: 105枚超払い出し終了 / 純増約104枚
- 業界一次資料がプレミアムビスカス25φ/30φのピュア・エディション共通値として説明。

modeSpecificMinimumData:
- 完全告知ノーマル機。
- エマ発表資料ではRT搭載バーニング・エディションと、RT非搭載ピュア・エディションを明確に区別。
- 実機完全再現用の細かな小役重複率等は収集対象外。

## resetBehavior（mission v0.7）

settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH。本機30φ固有の設定変更時初期挙動を直接確定できず。
carryOverBehavior: NOT_MATERIAL_CONFIRMED_SYSTEM_STRUCTURE。公開ゲーム数天井/RT/ART/CZ/モードを確認できないノーマル機。据え置き固有の初期出目等はUNVERIFIED_AFTER_RESEARCH。
powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。電源OFF→ONのみの30φ固有初期出目/告知挙動を確定できず。
gameCounterReset: NOT_APPLICABLE_NO_GAME_COUNT_CEILING_CONFIRMED。
ceilingAfterReset: NOT_APPLICABLE_NO_CEILING_CONFIRMED。
modeAfterReset: NOT_APPLICABLE_NO_MODE_SYSTEM_CONFIRMED。
stateAfterReset: NOT_APPLICABLE_NO_PUBLIC_INTERNAL_STATE_SYSTEM_CONFIRMED。
advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）。
resetBenefits: NONE_CONFIRMED_AFTER_RESEARCH。
resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH。
resetDetection: UNVERIFIED_AFTER_RESEARCH。ガックン/初期出目/表示等による30φ固有変更判別を確定できず。
numericResetData: NONE_CONFIRMED_AFTER_RESEARCH。

### resetBehavior再探索メモ

2026-09-02に「いみそ～れ2 / ピュアエディション30 / プレミアムビスカス / エマ」と「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 天井短縮 / モード / ガックン」を組み替えて再探索。25φと30φを混同しないよう型式名・リセット挙動は独立根拠がない部分を未確定のまま保持した。4号機イミソーレのモーニング/裏物情報は転用していない。

## 導入・派生の扱い

- グリーンべると（2008-10-24）はピュア・エディション「プレミアムビスカス」を25φ/30φとして明記し、12月7日から納品予定。
- ALL7は「いみそ～れ2 ピュアエディション プレミアムビスカス」を2008-12-08導入予定として掲載。
- 後年の2008年度全機種一覧でも25/30を独立機種として掲載。本DBの全機種方針に合わせ30φを独立レコード化する。

## sources

取得日: 2026-09-02

- https://web-greenbelt.jp/00003852/ — グリーンべると（2008-10-24）。ピュア・エディション=プレミアムビスカス25φ/30φ、RT非搭載、合成1/163.8〜1/127.5、BIG約312枚/REG約104枚、12/7納品予定。信頼度: INDUSTRY。
- https://www.all7.jp/plans/index/2008/12/10 — ALL7。2008-12-08導入予定。信頼度: INDUSTRY。
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/ema_slot/31/a.php — パチマガスロマガ。ピュア・エディション共通の完全告知ノーマル、BIG約312枚/REG約104枚。信頼度: ANALYSIS_HIGH。
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/ema_slot/31/c.php — パチマガスロマガ。ピュア・エディション共通の設定別1000円あたりゲーム数。信頼度: ANALYSIS_HIGH。
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/ema_slot/31/h.php — パチマガスロマガ。ピュア・エディション共通の設定別BIG/REG/合算・シミュレートPAYOUT。信頼度: ANALYSIS_HIGH。
- https://pacnk.com/photoslot/mlist_2008.html — 2008年度一覧で25/30を独立掲載。信頼度: ANALYSIS_SINGLE。
- https://www.p-world.co.jp/sp/search_kisyubbs.cgi?code=&group_id=3112&mode=thread_list&page=3 — P-WORLDシリーズ掲示板の対象機種一覧でピュアエディション25/30双方の存在を確認。性能値根拠には使用しない。信頼度: ANALYSIS_SINGLE_EXISTENCE_ONLY。

## missingFields

- 30φの正式型式名/検定番号
- 30φ単独資料による設定別性能・50枚ベースの独立裏取り
- 設定変更/据え置き/電源OFF→ON時の本機固有初期挙動
- ガックン等の変更判別法

## conflicts

- 30φ単独の市場掲載機械割を独立回収できていないため、25φP-WORLD値との差を30φのCONFLICTとは扱わない。シリーズ共通パチマガスロマガ値を主値として保持。

coreStatus: COMPLETE_CORE_SERIES_COMMON_WITH_VARIANT_QA
resetStatus: RESEARCHED_WITH_UNVERIFIED_NONCORE_RESET_DETAILS
