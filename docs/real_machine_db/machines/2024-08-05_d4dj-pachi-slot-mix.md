# L D4DJ Pachi-Slot Mix

recordNo: 1668
machineName: L D4DJ Pachi-Slot Mix
aliases: スマスロD4DJ / D4DJ / LパチスロD4DJ
manufacturer: KYORAKU（京楽産業.）
formalModel: LパチスロD4DJKB
inspectionCode: 4S0424
releaseDate: 2024-08-05
generation: 6.5号機 / スマスロ
systemType: AT / セット数管理型AT + 擬似ボーナス
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE

## releaseAndModelEvidence
- KYORAKU公式製品ページおよび2024-07-12公式NEWSで機種名、スマスロAT、純増約1.3枚/Gまたは約4.3枚/Gを確認。
- KYORAKU公式は2024-07-26から直営サンシャインKYORAKUでフィールドテスト実施を告知。全国本線は業界記事・主要解析で2024-08-05一致。
- 遊技通信/P-WORLD業界ニュースで型式名 `L D4DJKB` 表記、2024-08-05ホール導入予定を確認。
- HAZUSEで正式型式 `LパチスロD4DJKB`、検定番号 `4S0424`、KYORAKU、導入開始日2024-08-05を照合。
confidence: OFFICIAL + INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- setting1: 97.69%（通常丸め97.7%）
- setting2: 98.57%（通常丸め98.6%）
- setting3: 100.04%（通常丸め100.0%）
- setting4: 104.00%
- setting5: 108.24%（通常丸め108.2%）
- setting6: 114.99%（通常丸め114.9%）
initialHitBySetting:
- setting1: CZ 約1/112.2 / AT 約1/270.5
- setting2: CZ 約1/110.9 / AT 約1/264.0
- setting3: CZ 約1/109.6 / AT 約1/242.5
- setting4: CZ 約1/104.4 / AT 約1/227.1
- setting5: CZ 約1/103.6 / AT 約1/209.9
- setting6: CZ 約1/99.9 / AT 約1/191.3
baseGamesPer50: 約34G/50枚
netIncrease: AT 約1.3枚/G / 擬似ボーナス等 約4.3枚/G
basicPayout:
- AT「D4 FES.」: 1セット30G+α、セット数管理型
- BIG BONUS: 約100枚
- SUPER BIG BONUS: 約150〜1000枚
- Party Time: 10Gのボーナス引き戻しST
confidence: OFFICIAL + INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- 通常時は小役・ディスク揃い・規定ゲーム数などからCZを経由しATを目指す。
- 通常時のゲーム数天井は内部モードで管理し、モードA 777G / モードB 555G / モードC 444G / 天国111G。
- 最大777G消化でAT「D4 FES.」当選。
- 特殊な「D4モード」があり、設定変更時の一部でも移行する。朝一客行動に影響するため存在のみresetBehaviorへ保持し、通常時の詳細内部抽選は収集対象外。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_WITH_UNVERIFIED_GAKKUN_AND_RESET_CEILING_MODE_DISTRIBUTION
resetQaLastUpdated: 2026-09-14

### settingChangeBehavior
- 有利区間RESET。
- 天井までのゲーム数RESET。
- 天井モードを再抽選。
- CZモードを再抽選。
- D4モードを再抽選。
- 内部状態を再抽選。
- 必勝本では設定変更後の開始ステージは実戦上「昼ステージ」。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### carryOverBehavior
- 据え置きでは有利区間、天井進行、内部モード、内部状態を基本CARRY_OVER。
- なな徹の設定変更/据え置き比較表では有利区間・天井・内部状態・内部モードを据え置き時引継ぎと明記。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### powerCycleBehavior
- 純電源OFF→ONでは天井までのゲーム数、天井モード、CZモード、D4モード、内部状態を引継ぐ。
- 有利区間は設定変更を伴わない純電断では引継ぎとして扱う。機種別比較資料と据え置き契約に整合。
- 純電断時の液晶開始ステージは主要解析でも調査中で固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_COUNTER_MODES_AND_STATE / UNVERIFIED_FOR_STAGE_RESTORE

### gameCounterReset
- 設定変更: RESET。
- 据え置き/純電源OFF→ON: CARRY_OVER。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### ceilingAfterReset
- 通常最大天井: 777G+α（モードA）。
- モードB: 555G、モードC: 444G、天国: 111G。
- 設定変更時は天井モードを再抽選する。
- 主要解析に「設定変更後はモードB以上濃厚」とする実戦推測があるが、公式/主要解析の確定振り分けとしては公開固定されていないため、固定専用短縮天井555Gとしてcanonical化しない。
- 全リセ店約100件を確認し最大557Gまでだったという後年実戦検証は補助資料として保持するが、解析確定値ではない。
confidence: ANALYSIS_HIGH_FOR_MODE_CEILINGS_AND_RESELECTION / ANALYSIS_SINGLE_EMPIRICAL_FOR_B_OR_HIGHER_HYPOTHESIS

### modeAfterReset
- 天井モード、CZモード、D4モードを設定変更時に再抽選。
- 設定変更時の一部でD4モードへ移行することは複数解析で一致。
- 設定変更時の天井モードA/B/C/天国の正規振り分け、CZモード振り分け、D4モード突入率は検索語・資料系統を変えて再探索したが公開固定値を確認できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 「朝一はモードB以上」の記述は実戦データ由来の推測であり、確定解析とは分離。
confidence: ANALYSIS_HIGH_FOR_RESELECTION_AND_D4_POSSIBILITY / UNVERIFIED_FOR_DISTRIBUTIONS

### stateAfterReset
- 設定変更: 低確/通常/高確を設定別に再抽選。
- 据え置き/純電源OFF→ON: CARRY_OVER。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### advantageousSectionReset
- 設定変更: RESET。
- 据え置き/純電源OFF→ON: CARRY_OVER。
- 営業中は有利区間内差枚+2200枚到達後のエンディング等でもリセットされ、設定変更時を除く有利区間リセット後は「GROOVY DREAM CHANCE」へ突入する。
- この営業中恩恵は朝一設定変更時には適用しない。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### resetBenefits
- 設定変更時の一部で、長期出玉率100%超とされる特殊「D4モード」へ移行する可能性。
- 内部状態を再抽選し、高設定ほど通常/高確スタート比率が高い。
- 実戦資料では朝一がモードB以上相当の挙動を示す傾向が強いが、確定リセット恩恵としては未確定扱い。
confidence: ANALYSIS_HIGH_FOR_D4_AND_STATE / ANALYSIS_SINGLE_EMPIRICAL_FOR_B_OR_HIGHER

### resetPenalties
- 前日の天井進行・天井モード・CZモード・D4モード・内部状態は設定変更で消去/再抽選されるため、前日が有利な蓄積状態なら設定変更は客側に不利となり得る。
- 設定変更専用の固定的な不利率・冷遇数値は再探索後も確認できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_RESET_LOSS / UNVERIFIED_FOR_NUMERIC_PENALTY

### resetDetection
- なな徹の機種専用リセット判別は「現在調査中」。
- 実戦仮説どおり朝一がモードB以上なら555G+α超過は据え置き推測材料になり得るが、正規モード振り分けが非公開のため確定判別として採用しない。
- 設定変更後は必勝本実戦上、昼ステージ開始。ただしステージ単独での確定判別契約は確認できない。
- 本機固有のリールガックン条件/発生率は、機種名・型式・KYORAKU + 設定変更/リセット/朝一/据え置き/電源OFF ON/ガックンへ検索語を変え、主要解析・立ち回り資料を横断したが固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_KNOWN_BEHAVIOR / UNVERIFIED_FOR_DEFINITIVE_DETECTION_AND_GAKKUN

### numericResetData
settingChangeInternalStateDistribution:
- setting1: 低確70.3% / 通常19.9% / 高確9.8%
- setting2: 低確67.6% / 通常21.5% / 高確10.9%
- setting3: 低確64.5% / 通常23.0% / 高確12.5%
- setting4: 低確53.1% / 通常27.0% / 高確19.9%
- setting5: 低確47.2% / 通常30.9% / 高確21.9%
- setting6: 低確37.5% / 通常37.5% / 高確25.0%
modeCeilings:
- modeA: 777G
- modeB: 555G
- modeC: 444G
- heaven: 111G
- resetCeilingModeDistribution: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- resetD4ModeEntryRate: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- gakkunRate: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH_FOR_STATE_DISTRIBUTION

### publicMorningNumbers
- 設定変更時内部状態振り分け: 設定1〜6で上記公開値。
- モード別天井: 777G / 555G / 444G / 111G。
- 朝一全リセ約100件の補助実戦サンプル: 最大557Gまでに当選したとの報告。これは正規解析値ではなく `EMPIRICAL_SUPPORT_ONLY`。
- D4モード移行率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。

## conflicts
- 機械割は、なな徹/一撃の精密値 `97.69 / 98.57 / 100.04 / 104.00 / 108.24 / 114.99%` と、多数資料の丸め値 `97.7 / 98.6 / 100.0 / 104.0 / 108.2 / 114.9%` が整合。一方、必勝本は設定1/2を `97.6 / 98.5%` と掲載。canonicalは精密値を採用し、必勝本差を `CONFLICT_ROUNDING_OR_SOURCE_VARIANCE_SETTINGS1_2` として保持。
- マルっとWAVEの設定3 AT初当りのみ `1/481.7` と掲載する一方、なな徹・一撃・ちょんぼりすた等は `1/242.5` で一致。設定3は `1/242.5` をcanonicalとし、`1/481.7` は `CONFLICT_LIKELY_SOURCE_TYPO` として保持。
- 「朝一モードB以上」は全リセ実戦データに基づく強い推測だが、必勝本は天井モードを単に「再抽選」、なな徹も正式振り分けを掲載していない。よって固定555G短縮天井には格上げしない。

## missingFields
- resetDetection.gakkun: UNVERIFIED_AFTER_RESEARCH
- gakkunRate: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- definitiveResetDetection: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior.preciseStageRestore: UNVERIFIED_AFTER_RESEARCH
- resetCeilingModeDistribution: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- resetCZModeDistribution: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- resetD4ModeEntryRate: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- resetPenaltyNumericRate: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH

## groupAudit
- 2024-08-05 canonical既知群は4機: `スマスロ ゲゲゲの鬼太郎 覚醒 / L D4DJ Pachi-Slot Mix / Lワンパンマン / スマスロ トロピカーナ`。
- 本機は2/4処理。残り `Lワンパンマン / スマスロ トロピカーナ` をcanonical順序で継続する。
- 4機完了後にPB・別型式・地域先行・延期/段階導入を再監査してCLOSED判定する。

## sources
取得日: 2026-09-14
- KYORAKU公式製品ページ: https://www.kyoraku.co.jp/product_site/2024/d4dj/
- KYORAKU公式NEWS（機種発表）: https://www.kyoraku.co.jp/news/detail/762
- KYORAKU公式NEWS（直営フィールドテスト）: https://www.kyoraku.co.jp/news/detail/761
- P-WORLD / 遊技通信 業界ニュース: https://news.p-world.co.jp/articles/27958/yugitsushin
- P-WORLD / グリーンべると 業界ニュース: https://news.p-world.co.jp/articles/27976/greenbelt
- HAZUSE: https://hazuse.com/hd/4s0424/
- なな徹 機種まとめ: https://nana-press.com/kaiseki/machine/787/
- なな徹 朝一・設定変更: https://nana-press.com/kaiseki/machine/787/23041/
- なな徹 内部状態: https://nana-press.com/kaiseki/machine/787/23043/
- なな徹 天井: https://nana-press.com/kaiseki/machine/787/23038/
- なな徹 狙い目: https://nana-press.com/kaiseki/machine/787/23039/
- 一撃 天井・朝一: https://1geki.jp/slot/l_d4dj/3/
- 一撃 設定差: https://1geki.jp/slot/l_d4dj/0/
- パチ&スロ必勝本 天井&設定変更: https://hisshobon.com/machineinfo/84109/
- パチ&スロ必勝本 基本スペック: https://hisshobon.com/machineinfo/84111/
- ちょんぼりすた: https://chonborista.com/slot/kyoraku-slot/214667/
- スロパチクエスト 朝一実戦補助: https://www.slopachi-quest.com/article/d4dj-tenjou/
- マルっとWAVE（スペック差異参照）: https://marutto-w.com/industry_news/20240806
