# シンデレラブレイド

machineName: シンデレラブレイド
manufacturer: ネット
releaseDate: 2012-07-09
releaseDatePrecision: exact_day
releaseDateNotes: K-Naviの2012年7月導入カレンダーとパチンコビレッジの2012年導入カレンダーが2012-07-09で一致。K-Naviは全国一斉導入開始日と明記。
generation: 5号機
systemType: ART専用系 / 32G周期CZ・ゲーム数上乗せ
recordStatus: COMPLETE_CORE_RESET_RESEARCHED_WITH_GAPS

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 96.3% |
| 2 | 98.1% |
| 3 | 101.5% |
| 4 | 104.7% |
| 5 | 107.6% |
| 6 | 114.2% |

reliability: ANALYSIS_HIGH_CROSSCHECKED
notes: P-WORLD、pacnk、2012年当時更新のシンデレラブレイド@Wikiテンプレで一致。

## initialHitBySetting

### ART「武闘会」平均出現率 / 主系列

| 設定 | ART |
|---|---:|
| 1 | 1/209 |
| 2 | 1/200 |
| 3 | 1/178 |
| 4 | 1/163 |
| 5 | 1/149 |
| 6 | 1/120 |

reliability: ANALYSIS_HIGH_CROSSCHECKED
notes: P-WORLD、pacnk、当時Wikiテンプレが一致。Wikiには別定義として「ART初当り 1/339,1/337,1/310,1/295,1/277,1/261」と「平均ART出現率 1/209～1/120」が併記される。物差し本線ではP-WORLD/pacnkがART初当りとして扱う1/209～1/120系列を採用し、定義差はCONFLICT欄に保持。

### 当時Wikiの「ART初当り」別定義

| 設定 | ART初当り |
|---|---:|
| 1 | 1/339 |
| 2 | 1/337 |
| 3 | 1/310 |
| 4 | 1/295 |
| 5 | 1/277 |
| 6 | 1/261 |

reliability: CONFLICT_DEFINITION_PERIOD_COMMUNITY_DB
notes: 当時Wikiテンプレが「ART初当り」と「平均ART出現率」を別列で掲載。P-WORLD/pacnkのART初当り表は後者系列なので平均化しない。

## baseGamesPer50

value: UNVERIFIED_AFTER_RESEARCH
reliability: UNVERIFIED
notes: 「シンデレラブレイド / シンブレ / NET / 初代」と「50枚 / 1000円 / ベース / コイン持ち / 回転数 / 30G / 31G / 32G」を組み替え、P-WORLD、pacnk、当時Wiki、メーカー系プレス、旧攻略/回顧資料を再探索したが、初代の比較可能な直接値を確定できず。シンデレラブレイド2/3/4の30.73G/31.4G/34.3Gは別機種のため流用しない。

## netIncrease

value: 約2.2枚/G
reliability: OFFICIAL_PLUS_ANALYSIS_CROSSCHECKED
notes: ネット公式プレスリリース（2014年の初代シミュレーター紹介）が純増2.2枚と明記。P-WORLD、当時Wikiでも一致。

## basicPayout

- ART「武闘会」: 1セット40G+α / 約2.2枚/G / ゲーム数上乗せ型
- 通常時は32G固定の通常ステージ消化後、CZ「お城へGO」へ移行。
- 上乗せ特化「おしりペンペンタイム」: 継続率90～99%（P-WORLD）。

reliability: OFFICIAL_PLUS_ANALYSIS_CROSSCHECKED

## modeSpecificMinimumData

- 通常時は32G+αを1周期としてART当否を告知。
- 周期天井は通常時に24周期連続スルー後、25周期目でART当選。
- 1周期は概ね36～38Gで、25周期は約900～950G（当時Wiki）。pacnkは通常時32G+ジャッジメントバトル4～7G、最大約900～975Gとしているため範囲表現差を保持。
- ART終了後/設定変更時の開始ステージ振り分けは全設定共通で 修行35% / 鍛冶30% / 古城30% / プリシラ5%（当時Wiki）。

reliability: ANALYSIS_HIGH_FOR_PERIOD_WIKI_AND_CROSSCHECKED_CORE

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED_WITH_NUMERIC_RESET_TABLE_AND_GAPS
resetQaLastUpdated: 2026-09-05

settingChangeBehavior: CONFIRMED. pacnkは設定変更後にゲーム数・剣レベル・周期・ステージがすべてリセットされ、周期天井振り分けも通常時とは別になると明記。当時Wikiは設定変更後専用の天井周期振り分けと、ART終了時/設定変更時の開始ステージ振り分けを掲載。
carryOverBehavior: UNVERIFIED_AFTER_RESEARCH. 据え置き時にゲーム数・剣レベル・周期・ステージ・余剰ポイントが具体的にどう保持されるかを、初代本機固有の解析本文で十分な確度まで直接確定できず。2012年当時のプレイヤー回顧には宵越し狙い/リセット判別の実践報告があるが、正式契約としては採用しない。
powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH. 設定変更を伴わない電源OFF→ONのみのゲーム数・周期・剣レベル・ステージ処理を初代本機固有資料で直接確定できず。後継2/3/4の電断仕様は流用しない。
gameCounterReset: CONFIRMED_CLEAR_ON_SETTING_CHANGE. 設定変更後はゲーム数・周期がリセット。
ceilingAfterReset: CONFIRMED_SPECIAL_RESET_CEILING_DISTRIBUTION. 通常時とは別の設定変更後専用天井周期振り分けを使用。最大25周期自体は残るが、5/10/15/20周期が強く優遇される。
modeAfterReset: NOT_A_SIMPLE_MODE_SYSTEM__RESET_PERIODIC_TABLE_CONFIRMED. 一般的なA/B/天国型モードとしては扱わず、設定変更後専用の周期天井テーブルを確認。
stateAfterReset: CONFIRMED_PARTIAL. 開始ステージは修行35% / 鍛冶30% / 古城30% / プリシラ5%。ただしステージと内部状態が完全リンクするか当時Wiki自身が不明としているため、内部状態そのものの振り分けとしては扱わない。
advantageousSectionReset: NOT_APPLICABLE_5TH_GEN
resetBenefits: CONFIRMED. 設定変更後は通常時より浅い周期が天井に選ばれやすい。特に10周期目40%、15周期目15%、5周期目10%、20周期目5%。朝一の天井狙い行動に明確に影響する。
resetPenalties: CONFIRMED_PARTIAL. 前日のゲーム数・周期・剣レベル・ステージ進捗は設定変更で失われる。前日深いハマリの宵越し価値を消す一方、変更後専用の浅い天井振り分けという恩恵がある。
resetDetection: PARTIAL_LOW_CONFIDENCE. 設定変更でゲーム数/周期/剣Lv/ステージがリセットされるため前日閉店時の状態を把握していれば比較材料になる。2012年プレイヤーレビューには「前日G数をメモすればリセット判別可能」とする実践報告あり。ただしガックン・ランプ・初期出目など単独で確定できる本機固有契約はUNVERIFIED_AFTER_RESEARCH。
publicMorningNumbers: CONFIRMED_NUMERIC_RESET_TABLE.
numericResetData:
- 設定変更後天井周期振り分け（全設定共通）:
  - 1～4周期: 各1%
  - 5周期: 10%
  - 6～9周期: 各1%
  - 10周期: 40%
  - 11～14周期: 各1%
  - 15周期: 15%
  - 16～19周期: 各2%
  - 20周期: 5%
  - 21～25周期: 各2%
- 設定変更後/ART終了時 開始ステージ: 修行35% / 鍛冶30% / 古城30% / プリシラ5%
- 通常周期: 32G+α
- 通常最大天井: 25周期（約900～950G当時Wiki、約900～975G pacnk）

notes:
- 「シンデレラブレイド / シンデレラブレード / シンブレ / 初代シンデレラブレイド / NET」と「設定変更 / リセット / 朝一 / 据え置き / 宵越し / 電源OFF ON / 電断 / 天井 / 周期 / 剣レベル / ステージ / ガックン / 50枚 / 1000円」を組み替えて再探索。
- K-Navi、P-WORLD、パチンコビレッジ、ネット公式系プレス、pacnk、2012年更新のシンデレラブレイド@Wiki、当時攻略/プレイヤー回顧を横断。
- 2014年「シンデレラブレイド2」、2017年「3」、2021年「4」のresetBehavior/50枚値は別機種なので流用していない。

resetQaReliability: ANALYSIS_HIGH_FOR_SETTING_CHANGE_RESET_AND_NUMERIC_RESET_TABLE__OFFICIAL_PLUS_ANALYSIS_FOR_CORE__UNVERIFIED_FOR_PURE_CARRYOVER_POWER_CYCLE_AND_STANDALONE_DETECTION

## conflicts

- ART初当り定義: P-WORLD/pacnkは1/209～1/120をART初当りとして掲載。当時Wikiテンプレは1/339～1/261を「ART初当り」、1/209～1/120を「平均ART出現率」と別定義で併記。定義差を平均化しない。
- 最大天井G換算: 当時Wikiの周期早見は25周期900～950G、pacnkは1周期32G+JB4～7Gとして約900～975G。周期天井25回という本体仕様は一致し、ゲーム数換算範囲のみCONFLICT/表現差として保持。

## missingFields

- baseGamesPer50: UNVERIFIED_AFTER_RESEARCH
- carryOverBehavior: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- resetDetection standalone methods (gackun/lamp/initial reel state): UNVERIFIED_AFTER_RESEARCH
- modelName / approvalNumber: UNVERIFIED_AFTER_RESEARCH in this relay

## sources

取得日: 2026-09-05

- K-Navi 2012年7月導入カレンダー: https://p-kn.com/calendar/201207/
- パチンコビレッジ 2012年導入カレンダー: https://www.pachinkovillage.com/introduction/index.php?Y=2012&action=archive
- P-WORLD: https://www.p-world.co.jp/machine/database/6740
- ネット公式系プレス（初代シミュレーターiOS）: https://www.dreamnews.jp/press/0000097980/
- ネット公式系プレス（初代シミュレーターAndroid/Kindle）: https://www.dreamnews.jp/press/0000096413/
- pacnk 初代シンデレラブレイド: https://pacnk.com/slot/tools/sh_cinderellablade.html
- シンデレラブレイド@Wiki 天井振り分け（最終更新2012-09-10）: https://w.atwiki.jp/pipirurenyan/pages/42.html
- シンデレラブレイド@Wiki 通常時（設定変更時ステージ、2012年解析）: https://w.atwiki.jp/pipirurenyan/pages/39.html
- シンデレラブレイド@Wiki テンプレ（当時基本スペック）: https://w.atwiki.jp/pipirurenyan/pages/38.html
- 当時プレイヤーレビュー/回顧（判別実践報告、低信頼補助）: https://crankyseven.com/cinderellablade-pc-review.htm

## reliabilitySummary

- releaseDate: ANALYSIS_HIGH_CROSSCHECKED
- 性能コア: OFFICIAL_PLUS_ANALYSIS_CROSSCHECKED
- payout/ART main series: ANALYSIS_HIGH_CROSSCHECKED with definition conflict retained
- resetBehavior: ANALYSIS_HIGH for setting-change reset and numeric reset table; PARTIAL/UNVERIFIED for pure carryover, power cycle and standalone detection
