# Lラブ嬢3～Wご指名はいかがですか？～

recordNo: 1605
machineName: Lラブ嬢3～Wご指名はいかがですか？～
aliases: Lラブ嬢3 / スマスロ ラブ嬢3 / ラブ嬢3 Wご指名はいかがですか
manufacturer: アムテックス（平和）
formalModel: Lラブ嬢3M4
inspectionCode: UNVERIFIED_AFTER_RESEARCH
releaseDate: 2023-12-04
generation: 6.5号機 / スマスロ
systemType: AT / 差枚数管理型AT + 上位ゲーム数管理型AT
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE

## releaseDateEvidence
- グリーンべると（2023-10-20）はホール導入を2023-12-04予定と明記。
- 一撃のメーカーリリース情報も2023-12-04導入予定と記載。
- ちょんぼりすた等の解析DBも2023-12-04導入で一致。
- 遊技日本は型式 `Lラブ嬢3M4`、製造元アムテックスとして発表し、12月導入開始予定としている。
信頼度: INDUSTRY_HIGH / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## payoutRateBySetting
| 設定 | 機械割 |
|---|---:|
| 1 | 97.5% |
| 2 | 98.3% |
| 3 | 100.5% |
| 4 | 104.4% |
| 5 | 108.4% |
| 6 | 112.1% |

遊技日本、なな徹で一致。別の単一二次資料に設定3=103.5%表記があるが、メーカー発表系を含む複数資料の100.5%をcanonicalとする。
信頼度: INDUSTRY_HIGH / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## initialHitBySetting
| 設定 | AT初当たり |
|---|---:|
| 1 | 1/285.2 |
| 2 | 1/278.0 |
| 3 | 1/263.4 |
| 4 | 1/242.7 |
| 5 | 1/224.9 |
| 6 | 1/210.4 |

遊技日本、なな徹等で一致。
信頼度: INDUSTRY_HIGH / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## baseGamesPer50
- 約32.4G/50枚（全設定共通）。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## netIncrease
- LOVE RUSH: 約2.7枚/G。
- W LOVE RUSH: 約2.7枚/G。
信頼度: INDUSTRY_HIGH / ANALYSIS_HIGH

## basicPayout
- AT初当たり時は必ず初期枚数決定ゾーン「OPENING ATTACK」へ移行。
- OPENING ATTACKは5G or 10Gで、毎ゲーム差枚数を上乗せして初期枚数を決定するため、固定の基本獲得枚数は設定されていない。
- 通常AT「LOVE RUSH」は差枚数管理型。
- 上位AT「W LOVE RUSH」は30G+αのゲーム数管理型で、その間は差枚減算停止・上乗せ報酬が2倍となる。
- VIP BONUS / ハーレムBONUSはいずれも30G。
信頼度: INDUSTRY_HIGH / ANALYSIS_HIGH

## modeSpecificMinimumData
- 通常時のAT当選ルートは規定ゲーム数、レア役直撃、LOVE ZONE、キャバクラチャンス。
- LOVE ZONE出現率は設定1 1/181.7 ～ 設定6 1/124.5。
- 通常モードのゲーム数天井は通常A/B 750G+α、通常C 500G+α、天国A/B 100G+α。
- W LOVE RUSH実質出現率は設定1 1/1831.1 ～ 設定6 1/1369.2。
信頼度: ANALYSIS_HIGH

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_WITH_POWER_CYCLE_UNVERIFIED
resetQaLastUpdated: 2026-09-13

### settingChangeBehavior
- 設定変更時は有利区間、天井、内部状態、モードをRESET。
- キャバポイントは0ptスタート。
- 開始ステージは「新宿華舞姫町七番街」、液晶出目は「3H7」。
信頼度: ANALYSIS_HIGH

### carryOverBehavior
- 据え置き時は有利区間、天井、内部状態、モード、キャバポイントをCARRY_OVER。
- ただしキャバポイントは見た目上0ptから開始するため、液晶表示だけでは内部ポイント引継ぎを直接確認できない。
- 開始ステージと液晶出目は設定変更時と同じ。
信頼度: ANALYSIS_HIGH

### powerCycleBehavior
- 純電源OFF→ONのみの場合について、内部ゲーム数、天井、モード、内部状態、キャバポイント、有利区間の挙動を設定変更/据え置きと明示的に比較した機種固有資料を、機種名・型式・「電源OFF ON / 電断 / 朝一 / 据え置き / 引継ぎ」で再探索したが固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 一般スマスロ仕様から推定補完しない。
信頼度: UNVERIFIED_AFTER_RESEARCH

### gameCounterReset
- 設定変更時: RESET。
- 据え置き時: CARRY_OVER。
- 純電源OFF→ON: UNVERIFIED_AFTER_RESEARCH。
信頼度: ANALYSIS_HIGH / UNVERIFIED_POWER_CYCLE

### ceilingAfterReset
- 通常最大天井は750G+α。
- 設定変更時は通常C / 天国A / 天国Bのみが選択されるため、最大500G+αへ短縮。
- 天国A/Bなら100G+α以内でAT当選。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 設定変更時は通常C / 天国A / 天国Bのいずれかへ再抽選。
- 据え置き時はモードを引き継ぐ。
- 設定別振り分けはnumericResetDataに保存。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### stateAfterReset
- 設定変更時は内部状態をRESETし、通常/高確/超高確A/超高確Bへ再抽選。
- 据え置き時は内部状態を引き継ぐ。
- 設定別振り分けはnumericResetDataに保存。
信頼度: ANALYSIS_HIGH

### advantageousSectionReset
- 設定変更時: 有利区間RESET。
- 据え置き時: 有利区間CARRY_OVER。
- なな徹は判明している有利区間リセットタイミングとして「設定変更時」を明記。
- 純電源OFF→ON単独時は機種固有契約を固定できず `UNVERIFIED_AFTER_RESEARCH`。
信頼度: ANALYSIS_HIGH / UNVERIFIED_POWER_CYCLE

### resetBenefits
- 設定変更後は必ず通常C以上となるため、通常時最大750G+αの天井が最大500G+αへ短縮。
- 設定1でも天国A+B合算25.0%、設定6では44.6%で100G+α以内のATが見込める。
- 高設定ほど朝一高確以上の選択率も上昇する。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### resetPenalties
- 設定変更時だけ適用される定量的な不利要素は、検索語・資料系統を変えて再探索した範囲では確認できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
信頼度: UNVERIFIED_AFTER_RESEARCH

### resetDetection
- 設定変更/据え置きとも開始ステージ「新宿華舞姫町七番街」、液晶出目「3H7」で外見上同一。
- 据え置き時のキャバポイントも見た目は0pt開始のため、表示だけで直接判別できない。
- 朝一500G+αを超えてAT非当選なら設定変更後の通常C以上契約とは整合しないため据え置き推測材料になるが、途中当選・前兆等があるため単独確定条件としては扱わない。
- 本機固有のリールガックン条件・発生率は「ガックン / リール初動 / 設定変更 / 朝一」で再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。
信頼度: ANALYSIS_HIGH_FOR_DISPLAY / UNVERIFIED_GACKUN_AFTER_RESEARCH

### numericResetData
設定変更時モード振り分け:
| 設定 | 通常C | 天国A | 天国B |
|---|---:|---:|---:|
| 1 | 75.0% | 23.8% | 1.2% |
| 2 | 73.0% | 25.4% | 1.6% |
| 3 | 70.3% | 27.3% | 2.3% |
| 4 | 65.6% | 31.3% | 3.1% |
| 5 | 58.6% | 37.1% | 4.3% |
| 6 | 55.5% | 39.1% | 5.5% |

設定変更時内部状態振り分け:
| 設定 | 通常 | 高確 | 超高確A | 超高確B |
|---|---:|---:|---:|---:|
| 1 | 78.5% | 19.5% | 1.6% | 0.4% |
| 2 | 74.2% | 23.4% | 2.0% | 0.4% |
| 3 | 69.9% | 27.3% | 2.3% | 0.4% |
| 4 | 65.6% | 31.3% | 2.7% | 0.4% |
| 5 | 61.3% | 35.2% | 3.1% | 0.4% |
| 6 | 57.0% | 39.1% | 3.5% | 0.4% |

### publicMorningNumbers
- 設定変更後最大天井: 500G+α。
- 設定変更後100G+α以内AT（天国A+B）選択率: 設定1 25.0% / 2 27.0% / 3 29.6% / 4 34.4% / 5 41.4% / 6 44.6%。
- 設定変更後高確以上選択率（高確+超高確A+B）: 設定1 21.5% / 2 25.8% / 3 30.0% / 4 34.4% / 5 38.7% / 6 43.0%。

## groupAudit
- 2023-12-04導入はグリーンべると、一撃、解析DBで一致。
- 同日群のcanonical強候補は本機、Lリングにかけろ1 V、ニューシオサイ、L花の慶次～佐渡攻めの章、LモンキーターンV、Lマジカルハロウィン8、Sクランキークレストの7機。
- `パチスロ琉神－30 スイカバージョン` は2023-12-04表記の機種DBがある一方、業界記事では12月から一部地域テスト導入予定、一撃では2023-12-06から一部地域テスト導入とされるため、本群へ即混入せず `CONFLICT_REGIONAL_TEST_RELEASE_BOUNDARY` として次回以降の境界監査を継続する。
- 2023-12-04群は本レコード追加時点で OPEN 1/7 canonical processed。

## conflicts
- `CONFLICT_PAYOUT_SETTING3_SINGLE_SECONDARY`: 複数高信頼資料は設定3=100.5%。単一二次資料に103.5%表記があるため平均化せず保持。
- `CONFLICT_REGIONAL_TEST_RELEASE_BOUNDARY`: パチスロ琉神－30 スイカバージョンの一部DB 12/4表記 vs 業界記事の12月一部地域テスト / 12/6一撃表記。

## missingFields
- inspectionCode: UNVERIFIED_AFTER_RESEARCH
- pure power OFF→ON behavior: UNVERIFIED_AFTER_RESEARCH
- machine-specific gackun condition/rate: UNVERIFIED_AFTER_RESEARCH

## sources
取得日: 2026-09-13
- 遊技日本 / P-WORLDニュース（型式・スペック）: https://news.p-world.co.jp/articles/25625/nippon
- グリーンべると / P-WORLDニュース（2023-12-04導入・スペック）: https://news.p-world.co.jp/articles/25715/greenbelt
- P-WORLD機種DB: https://www.p-world.co.jp/machine/database/9928
- なな徹 AT確率/機械割/ベース: https://nana-press.com/kaiseki/machine/651/17435/
- なな徹 朝一・設定変更挙動: https://nana-press.com/kaiseki/machine/651/18114/
- なな徹 天井: https://nana-press.com/kaiseki/machine/651/18112/
- なな徹 W LOVE RUSH: https://nana-press.com/kaiseki/machine/651/18123/
- 一撃 メーカーリリース: https://1geki.jp/repo/20231003amtex/
- 一撃 天井/設定変更モード: https://1geki.jp/slot/l_lovejou3/3/
- 一撃 小役/ベース: https://1geki.jp/slot/l_lovejou3/4/
- ちょんぼりすた: https://chonborista.com/slot/amute/198299/
