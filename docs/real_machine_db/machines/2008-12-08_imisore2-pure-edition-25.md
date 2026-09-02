# いみそ～れ2 ピュアエディション25

machineName: いみそ～れ2 ピュアエディション25
manufacturer: エマ
releaseDate: 2008-12-08
generation: 5号機
systemType: ノーマル / 完全告知 / ボーナス主体
variant: 25φ / プレミアムビスカス
modelCode: イミソーレ2H（P-WORLD掲載）
settings: 1 / 2 / 3 / 4 / 5 / 6

## 性能コア

payoutRateBySetting:
- 市場掲載値（P-WORLD）: 設定1 96.7% / 設定2 98.4% / 設定3 100.7% / 設定4 104.4% / 設定5 107.7% / 設定6 112.0%
- パチマガスロマガ・シミュレート値: 設定1 96.92% / 設定2 98.54% / 設定3 100.74% / 設定4 104.64% / 設定5 107.75% / 設定6 111.55%
- status: CONFLICT_DEFINITION_OR_ROUNDING（平均せず双方保持）

initialHitBySetting:
- BIG: 1/318.1 / 1/309.1 / 1/297.9 / 1/277.7 / 1/264.3 / 1/248.2
- REG: 1/337.8 / 1/327.7 / 1/321.3 / 1/297.9 / 1/282.5 / 1/262.1
- 合成: 1/163.8 / 1/159.1 / 1/154.6 / 1/143.7 / 1/136.5 / 1/127.5

baseGamesPer50:
- 設定1 36.37G
- 設定2 36.67G
- 設定3 37.28G
- 設定4 37.73G
- 設定5 38.23G
- 設定6 38.55G

netIncrease: NOT_APPLICABLE（RT/ART非搭載のピュア・エディション）

basicPayout:
- BIG: 345枚超払い出し終了 / 純増約312枚
- REG: 105枚超払い出し終了 / 純増約104枚

modeSpecificMinimumData:
- 完全告知ノーマル機。
- エマの2008年発表では、RT「ネオクラッシュモード」を搭載するバーニング・エディションに対し、ピュア・エディションはRT非搭載として明確に区別される。
- 中段/角チェリー等の細かな内部抽選は物差し用途外のため収集しない。

## resetBehavior（mission v0.7）

settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH。本機固有の設定変更時のリール初期挙動・告知状態を直接説明する現存資料を確定できず。
carryOverBehavior: NOT_MATERIAL_CONFIRMED_SYSTEM_STRUCTURE。ノーマル・完全告知機で、引継ぎ対象となる公開ゲーム数天井/RT/ART/CZ/モードを確認できない。据え置き固有の追加挙動はUNVERIFIED_AFTER_RESEARCH。
powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。電源OFF→ONのみの本機固有初期出目/告知挙動を直接確定できず。
gameCounterReset: NOT_APPLICABLE_NO_GAME_COUNT_CEILING_CONFIRMED。通常ゲーム数天井/救済ゲーム数を確認できず。
ceilingAfterReset: NOT_APPLICABLE_NO_CEILING_CONFIRMED。リセット専用短縮天井も確認なし。
modeAfterReset: NOT_APPLICABLE_NO_MODE_SYSTEM_CONFIRMED。朝一専用モード/モード振り分けは確認なし。
stateAfterReset: NOT_APPLICABLE_NO_PUBLIC_INTERNAL_STATE_SYSTEM_CONFIRMED。
advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）。
resetBenefits: NONE_CONFIRMED_AFTER_RESEARCH。
resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH。
resetDetection: UNVERIFIED_AFTER_RESEARCH。ガックン、初期出目、表示等による本機固有の設定変更/据え置き判別法を確定できず。
numericResetData: NONE_CONFIRMED_AFTER_RESEARCH。

### resetBehavior再探索メモ

2026-09-02に「いみそ～れ2 / イミソーレ2H / ピュアエディション / プレミアムビスカス / エマ」と「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 天井短縮 / モード / ガックン」を組み替え、業界記事、P-WORLD、パチマガスロマガ、旧DB/回顧資料を横断。通常性能は十分回収できたが、本機固有resetBehaviorの直接資料は確定できなかったため、該当項目のみUNVERIFIED_AFTER_RESEARCHとした。4号機イミソーレのモーニング/裏物情報は本機へ転用していない。

## 導入・派生の扱い

- グリーンべると（2008-10-24）はピュア・エディション「プレミアムビスカス」を25φ/30φとして発表し、納品を2008-12-07から予定。
- ALL7はホール導入予定を2008-12-08として掲載。本DBはreleaseDateを2008-12-08、前日を納品開始予定として保持する。
- 同一次資料で25φ/30φの両仕様が明記され、後年機種一覧でも25/30が独立掲載されるため、全機種方針上25φと30φを別レコードにする。ただし共通性能の根拠はシリーズ資料として明示する。

## sources

取得日: 2026-09-02

- https://web-greenbelt.jp/00003852/ — グリーンべると（2008-10-24）。エマ発表会、ピュア・エディション=プレミアムビスカス25φ/30φ、RT非搭載、合成1/163.8〜1/127.5、BIG約312枚/REG約104枚、12/7納品予定。信頼度: INDUSTRY。
- https://www.all7.jp/plans/index/2008/12/10 — ALL7。2008-12-08導入予定。信頼度: INDUSTRY。
- https://www.p-world.co.jp/machine/database/5374 — P-WORLD。25φ、型式イミソーレ2H、設定別BIG/REG/合算、出玉率。信頼度: ANALYSIS_HIGH。
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/ema_slot/31/a.php — パチマガスロマガ。完全告知ノーマル、BIG約312枚/REG約104枚。信頼度: ANALYSIS_HIGH。
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/ema_slot/31/c.php — パチマガスロマガ。設定別1000円あたりゲーム数。信頼度: ANALYSIS_HIGH。
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/ema_slot/31/h.php — パチマガスロマガ。設定別BIG/REG/合算、シミュレートPAYOUT。信頼度: ANALYSIS_HIGH。
- https://pacnk.com/photoslot/mlist_2008.html — 2008年度機種一覧。25/30を独立掲載。信頼度: ANALYSIS_SINGLE。

## missingFields

- 設定変更時の本機固有リール/告知初期挙動
- 据え置き/単純電断による初期出目等の差
- ガックン等の変更判別法

## conflicts

- payoutRateBySetting: P-WORLD市場掲載値とパチマガスロマガ・シミュレート値に小差。定義/丸め差の可能性があるため平均せず双方保持。

coreStatus: COMPLETE_CORE_WITH_CONFLICTS
resetStatus: RESEARCHED_WITH_UNVERIFIED_NONCORE_RESET_DETAILS
