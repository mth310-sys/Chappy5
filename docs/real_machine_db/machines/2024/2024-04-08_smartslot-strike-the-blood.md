# スマスロ ストライク・ザ・ブラッド

recordNo: 1642
machineName: スマスロ ストライク・ザ・ブラッド
aliases: ストライク・ザ・ブラッド / ストブラ / Lストライク・ザ・ブラッド / Lストライク・ザ・ブラッドZC
manufacturer: エンターライズ
formalModel: Lストライク・ザ・ブラッドZC
inspectionCode: 3S1731
releaseDate: 2024-04-08
generation: 6.5号機 / スマスロ
systemType: A+AT / リアルボーナス+セット継続型AT
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE

## releaseDateEvidence
- エンターライズ製としてフィールズ/業界発表が2024年4月上旬導入を告知。
- HAZUSE、K-Navi、必勝本は2024-04-08導入で一致。
- グリーンべるとの2024-04-08新台スケジュールにも同日導入機として掲載。
confidence: INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modelEvidence
- 遊技日本/P-WORLDのプレス発表記事が型式名 `Lストライク・ザ・ブラッドZC`、製造元エンターライズと明記。
- 北海道公安委員会ほかの検定通過記事でも同型式を確認。
- HAZUSE機種DBが正式型式 `Lストライク・ザ・ブラッドZC`、検定番号 `3S1731` を掲載。
confidence: INDUSTRY + ANALYSIS_HIGH

## corePerformance
payoutRateBySetting:
- setting1: 98.2%
- setting2: 99.1%
- setting3: 101.0%
- setting4: 105.1%
- setting5: 107.5%
- setting6: 110.1%
initialHitBySetting:
- setting1: ボーナス 1/199.8 / AT 1/311.9
- setting2: ボーナス 1/199.8 / AT 1/295.7
- setting3: ボーナス 1/199.8 / AT 1/273.3
- setting4: ボーナス 1/199.8 / AT 1/223.7
- setting5: ボーナス 1/199.8 / AT 1/201.8
- setting6: ボーナス 1/199.8 / AT 1/178.6
baseGamesPer50: 約35G/50枚
netIncrease:
- AT「ヒロインタイム」: 約1.4枚/G
basicPayout:
- BIG BONUS: 約114枚
- カレイドBONUS: 約47枚
- AT「ヒロインタイム」: 1セット30G / 平均継続率約80%
confidence: INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- 約1/199.8のリアルボーナスと純増約1.4枚/GのATを組み合わせたA+AT型。
- ATは1セット30G、平均継続率約80%。
- 通常時のAT当選はリアルボーナス中抽選またはAT直撃が主経路。
- 通常時のボーナス/AT間天井は最大599Gで、到達時はAT当選。
- 天井G数は99/199/299/399/599Gの振り分け型。有利区間移行時のみ599G振り分けがなく最大399G。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED
resetQaLastUpdated: 2026-09-14

### settingChangeBehavior
- 有利区間RESET。
- ボーナス/AT間天井をRESETし、有利区間移行時専用の天井G数振り分けを再抽選。
- 内部状態RESET。
- エピソードポイントを有利区間移行時の振り分けで再抽選し、30pt以上から開始。
- 有利区間移行時は599G天井の振り分けがなく、最大399Gとなる。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### carryOverBehavior
- 据え置き時は有利区間、ボーナス/AT間天井、内部状態をCARRY_OVER。
- エピソードポイントも設定変更による有利区間再移行が発生しないため、設定変更時の30pt以上再抽選は行われない。
confidence: ANALYSIS_HIGH_FOR_SECTION_CEILING_STATE / ANALYSIS_INFERENCE_FROM_SECTION_TRANSITION_FOR_EPISODE_POINT

### powerCycleBehavior
- 電源OFF→ONのみでは天井までのゲーム数をCARRY_OVER。
- 内部状態もCARRY_OVER。
- 有利区間は設定変更を伴わない純電断ではCARRY_OVERとして扱う。
- 液晶表示ゲーム数・開始ステージの機種固有復帰契約は、機種名/型式/メーカーと「電源OFF ON」「電断」「朝一」「据え置き」を組み替えて再探索したが固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_CEILING_AND_STATE / UNVERIFIED_FOR_DISPLAY_AND_STAGE

### gameCounterReset
- 設定変更: ボーナス/AT間の内部天井進行RESET。
- 据え置き: 内部天井進行CARRY_OVER。
- 電源OFF→ON: 内部天井進行CARRY_OVER。
confidence: ANALYSIS_HIGH

### ceilingAfterReset
- 通常時のボーナス/AT間天井は最大599G。
- 設定変更を含む有利区間移行時は599G振り分けが消滅し、最大399Gへ短縮。
- 有利区間移行時の天井振り分けは設定別に公開されている。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 通常A/B等の独立した通常時モードは主要公開資料で確認されず、朝一差は主に「有利区間移行時の天井G数振り分け」として管理される。
- `NO_DISCRETE_MORNING_MODE_CONFIRMED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_CEILING_LOTTERY / NOT_APPLICABLE_FOR_SEPARATE_MODE

### stateAfterReset
- 設定変更: 内部状態RESET。
- 据え置き: 内部状態CARRY_OVER。
- 電源OFF→ON: 内部状態CARRY_OVER。
- 設定変更直後の低確/高確/超高確等の具体的初期振り分けは、なな徹・必勝本・一撃・HAZUSE・後年攻略整理を横断しても固定公開値を確認できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_BEHAVIOR / UNVERIFIED_FOR_INITIAL_STATE_DISTRIBUTION

### advantageousSectionReset
- 設定変更時に有利区間RESET。
- 据え置き/純電断では有利区間CARRY_OVER。
- 有利区間移行時は天井最大399G化とエピソードポイント30pt以上付与が発生するため、朝一性能に直接影響する。
confidence: ANALYSIS_HIGH

### resetBenefits
- 最大天井が599G→399Gへ短縮。
- 有利区間移行時にエピソードポイント30pt以上を獲得。
- 天井G数・エピソードポイントとも高設定ほど浅い天井/50ptが選ばれやすい設定別振り分けが公開されている。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### resetPenalties
- 設定変更時の主要な定量的不利要素は、公式/業界・主要解析・後年整理を横断して再探索した範囲では確認できず `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 朝一のボーナス/AT間内部進行が399Gを超えてもAT天井に到達しない挙動は、設定変更時最大399G契約と矛盾するため据え置き推測材料になる。
- 設定変更時は有利区間移行時エピソードポイント30pt以上が付与されるため、その後のエピソード到達挙動も補助的な推測材料になり得るが、単独確定判別にはしない。
- 本機固有のリールガックン条件/発生率は「ストライク・ザ・ブラッド」「ストブラ」「Lストライク・ザ・ブラッドZC」「エンターライズ」と「ガックン」「リール」「設定変更」「朝一」を組み替えて再探索したが、高信頼の機種固有契約を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 有利区間ランプによる本機固有の確定判別、設定変更/電断の開始ステージ差も主要資料から固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_CEILING_CLUE / UNVERIFIED_FOR_GAKKUN_LAMP_STAGE

### numericResetData
- 有利区間移行時天井振り分け setting1: 99G 0.4% / 199G 0.4% / 299G 0.4% / 399G 98.8% / 599G 0%
- setting2: 99G 0.8% / 199G 1.2% / 299G 1.6% / 399G 96.5% / 599G 0%
- setting3: 99G 1.2% / 199G 1.6% / 299G 2.3% / 399G 94.9% / 599G 0%
- setting4: 99G 2.3% / 199G 3.1% / 299G 4.7% / 399G 89.8% / 599G 0%
- setting5: 99G 2.3% / 199G 3.1% / 299G 4.7% / 399G 89.8% / 599G 0%
- setting6: 99G 3.1% / 199G 4.7% / 299G 6.3% / 399G 85.9% / 599G 0%
- 有利区間移行時エピソードポイント setting1: 30pt 99.6% / 50pt 0.4%
- setting2: 30pt 98.4% / 50pt 1.6%
- setting3: 30pt 96.9% / 50pt 3.1%
- setting4: 30pt 93.8% / 50pt 6.3%
- setting5: 30pt 87.5% / 50pt 12.5%
- setting6: 30pt 87.5% / 50pt 12.5%
- 設定変更時初期内部状態振り分け: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- ガックン発生率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH

### publicMorningNumbers
- 設定変更を含む有利区間移行時は最大天井399G。
- 全設定でエピソードポイント30pt以上から開始。
- 天井99/199/299Gの選択率およびエピソードポイント50pt選択率は高設定ほど上昇する公開設定差あり。

## conflicts
- performanceConflict: NONE_CONFIRMED
- resetConflict: NONE_CONFIRMED
- 一部初期攻略記事に「リセットによる天井短縮はおそらくない」とする推測記載があるが、後に必勝本・一撃・なな徹等で有利区間移行時の最大399G振り分けが解析公開されたため、古い推測値はcanonicalへ採用しない。

## sources
取得日: 2026-09-14

### official / industry
- 円谷フィールズHD / 発売告知: https://digitalpr.jp/r/83301
- 遊技日本 / P-WORLD ティザー公開: https://news.p-world.co.jp/articles/26809/nippon
- 遊技日本 / P-WORLD 検定通過: https://news.p-world.co.jp/articles/26820/nippon
- 遊技日本 / P-WORLD プレス発表・型式/性能: https://news.p-world.co.jp/articles/27365/nippon
- 遊技通信 / P-WORLD 新機種発表: https://news.p-world.co.jp/articles/27036/yugitsushin
- Amusement Japan / P-WORLD プレス説明会: https://news.p-world.co.jp/articles/27125/amusement
- グリーンべると / P-WORLD 2024-04-08導入スケジュール: https://news.p-world.co.jp/articles/27485/greenbelt

### machine DB / analysis
- HAZUSE機種DB: https://hazuse.com/machine/pachislot/3S1731/
- パチマガスロマガ機種概要: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/enterrise_slot/29/kh01.php
- 必勝本 基本スペック/天井/設定変更: https://p.hisshobon.jp/vpage/2614/2
- 必勝本 天井ゲーム数抽選: https://hisshobon.com/machineinfo/83251/
- 必勝本 エピソードポイント: https://p.hisshobon.jp/machine/4286/1/102056
- なな徹 朝一・設定変更: https://nana-press.com/kaiseki/machine/724/20438/
- なな徹 設定判別/エピソードポイント: https://nana-press.com/kaiseki/machine/724/20435/
- 一撃 天井/朝一: https://1geki.jp/slot/l_strike_the_blood/3/
- K-Navi機種DB: https://p-kn.com/slot/4119/
- パチビー機種情報: https://www.pachibee.jp/machines/kouryaku/224020009
- ぽこすろっと 朝一/リセット整理: https://www.nankaikoya.jp/striketheblood-kitaichi/
- スロパチクエスト リセット一覧: https://www.slopachi-quest.com/article/resets/

## missingFields
- 電源OFF→ON時の液晶表示ゲーム数/開始ステージの機種固有復帰契約: UNVERIFIED_AFTER_RESEARCH
- 設定変更時の内部状態具体的初期振り分け: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 本機固有ガックン条件/発生率: UNVERIFIED_AFTER_RESEARCH
- 有利区間ランプによる本機固有の確定判別: UNVERIFIED_AFTER_RESEARCH

## recordQuality
- core: COMPLETE_CORE
- resetBehavior: COMPLETE_RESEARCHED
- overallConfidence: INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH
