# アオハル♪操 A-LIVE

recordNo: 1653
machineName: アオハル♪操 A-LIVE
aliases: アオハル操 / SLOTアオハル♪操 A-LIVE / パチスロ アオハル♪操 A-LIVE
manufacturer: 大都技研
formalModel: Sアオハル♪操 A-LIVE A2
inspectionCode: 330628
releaseDate: 2024-06-03
generation: 6.5号機 / メダル機
systemType: AT / A400-AT・疑似ボーナス主体 / 技術介入
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE

## releaseDateEvidence
- 大都技研発表を扱うグリーンべると/Amusement Japan系業界記事で2024-06-03ホール導入予定を確認。
- HAZUSE、一撃、なな徹、K-Navi等でも2024-06-03導入で一致。
- 一部遊技通信記事に「6月下旬予定」表記があるため、初期告知差として保持するが、実導入日は6月3日をcanonical化。
confidence: INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_DATE_MATCH

## modelEvidence
- 遊技日本の検定通過記事で型式 `Sアオハル♪操 A-LIVE A2` を確認。
- HAZUSEで型式名 `Sアオハル♪操 A-LIVE A2`、検定番号 `330628` を確認。
confidence: INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- setting1: 98.0% / 完全攻略時100.1%
- setting2: 99.0% / 完全攻略時101.0%
- setting3: 100.3% / 完全攻略時102.3%
- setting4: 102.1% / 完全攻略時104.2%
- setting5: 104.0% / 完全攻略時106.3%
- setting6: 106.6% / 完全攻略時109.0%
initialHitBySetting:
- setting1: BIG 1/286.1 / REG 1/419.6 / BONUS合算 1/169.9
- setting2: BIG 1/280.4 / REG 1/413.3 / BONUS合算 1/166.8
- setting3: BIG 1/274.8 / REG 1/406.0 / BONUS合算 1/163.6
- setting4: BIG 1/264.1 / REG 1/391.5 / BONUS合算 1/157.5
- setting5: BIG 1/254.6 / REG 1/379.0 / BONUS合算 1/152.1
- setting6: BIG 1/241.1 / REG 1/359.2 / BONUS合算 1/144.1
baseGamesPer50: 約33G/50枚
netIncrease:
- 疑似ボーナス: 約7.0枚/G
basicPayout:
- アオハライブBIG BONUS: 平均約400枚（前半約330枚 + 後半平均約70枚）
- REGULAR BONUS: 約50枚
- 絶頂LIVE: 500～2000枚
- ボーナス1G連ストック率: 約20%
confidence: INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- 通常時は主にCZ「操CHANCE」経由で疑似ボーナス当選を目指す。CZは設定1で約1/79、成功期待度約40%。
- ボーナス終了後はCZ高確率状態「リハーサルステージ」へ移行し、CZ確率は設定1で約1/39。
- BIGは2コマ目押しの技術介入要素を持ち、通常機械割とは別に完全攻略時機械割が公開されているため両方を保持。
- 天井は非搭載。
- 通常時に「BBモード」が存在し、滞在中にボーナス当選するとBIG濃厚。平均滞在G数は約150Gとする解析あり。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_WITH_PARTIAL_POWER_CYCLE_AND_NUMERIC_BB_MODE_UNVERIFIED
resetQaLastUpdated: 2026-09-14

### settingChangeBehavior
- 有利区間RESET。
- 内部モードは再抽選され、設定変更後はBBモードスタートのチャンス。
- 高設定ほど設定変更時のBBモード選択率が高いとする複数解析がある。
- 内部状態については設定変更でRESETとする比較表を確認。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### carryOverBehavior
- 据え置き時は有利区間をCARRY_OVER。
- なな徹の朝一比較表では内部モードをCARRY_OVERと明記。
- 天井非搭載のため天井ゲーム数/周期天井の引継ぎ項目はNOT_APPLICABLE。
confidence: ANALYSIS_HIGH

### powerCycleBehavior
- ちょんぼりすたの設定変更/電源OFF→ON比較表では、純電断時の「内部状態」はRESETと記載。
- 一方、純電源OFF→ON時のBBモードそのもの、有利区間そのものについて機種固有の直接契約を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 据え置き一般と純電断を同一視して推測補完しない。
confidence: ANALYSIS_SINGLE_FOR_INTERNAL_STATE_RESET / UNVERIFIED_FOR_BB_MODE_AND_ADVANTAGEOUS_SECTION_DIRECT_CONTRACT

### gameCounterReset
- ゲーム数天井・CZ間天井・CZスルー回数天井はいずれも公開上非搭載/非公表で、朝一の天井ゲーム数RESET/CARRYという比較対象はNOT_APPLICABLE。
- 有利区間上限の規則論から擬似天井を推定しない。
confidence: ANALYSIS_HIGH

### ceilingAfterReset
- 本機はゲーム数天井非搭載。
- 設定変更による短縮天井もなし。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 設定変更後はBBモード移行抽選を行い、BBモードスタートのチャンス。
- BBモード滞在中のボーナスはBIG濃厚。
- 高設定ほど設定変更時BBモード選択率が優遇されるとする解析あり。
- 設定変更時BBモード選択率の設定別固定数値は、機種名/型式/メーカー/朝一/リセット/BBモード/移行率を変えて再探索しても確認できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- BBモード平均滞在G数は約150Gとする解析あり。ただし設定変更専用の滞在G固定値ではないため区別保存。
confidence: ANALYSIS_HIGH_FOR_EXISTENCE_AND_SETTING_DIFFERENCE / UNVERIFIED_FOR_NUMERIC_DISTRIBUTION

### stateAfterReset
- 設定変更: 内部状態RESET。
- 純電源OFF→ON: 内部状態RESETとする機種別比較表あり。
- 据え置き時の「内部モード」はなな徹で引継ぎを確認。内部状態とBBモードを同一概念として混同しない。
confidence: ANALYSIS_HIGH_FOR_SETTING_CHANGE / ANALYSIS_SINGLE_FOR_POWER_CYCLE

### advantageousSectionReset
- 設定変更時: RESET。
- 据え置き時: CARRY_OVER。
- 有利区間ランプから設定変更/据え置きを判別できない。
- 純電源OFF→ON単独時の有利区間契約は直接資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_SETTING_CHANGE_AND_CARRY / UNVERIFIED_FOR_POWER_CYCLE_DIRECT_CONTRACT

### resetBenefits
- 設定変更後はBBモードスタート抽選があり、BBモード滞在中にボーナス当選すればBIG濃厚。
- 高設定ほどBBモードスタート選択率が高い模様。
- 天井短縮恩恵はなし（天井非搭載）。
confidence: ANALYSIS_HIGH

### resetPenalties
- 設定変更により前日の有利区間および内部モードを失い再抽選となるため、前日BBモード滞在時はその状態を保持できない。
- 一方で朝一BBモード抽選の恩恵もあるため、固定的な「不利」とは評価しない。
confidence: ANALYSIS_HIGH

### resetDetection
- 有利区間ランプによる設定変更/据え置き判別は不可。
- 天井非搭載のため、深いハマリG数から設定変更/据え置きを確定する方法はない。
- 朝一BBモード示唆が出ても、BBモードは設定変更後専用ではなく通常のボーナス後にも移行抽選があるため、単独で設定変更確定材料にはしない。
- 本機固有のリールガックン条件/発生率、設定変更/電断後の確定ステージ差は、表記揺れ・型式名・大都技研・設定変更/リセット/朝一/据え置き/電源OFF ON/ガックンで再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_LAMP_AND_CEILING_NOT_APPLICABLE / UNVERIFIED_FOR_GAKKUN_AND_STAGE

### numericResetData
- 設定変更時BBモード選択率: 高設定ほど優遇 / 具体的設定別数値 `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`
- BBモード平均滞在G数: 約150G（通常時BBモード一般値。設定変更専用値ではない）
- 通常天井: 非搭載
- 設定変更後短縮天井: 非搭載

## conflicts
- 導入告知時期は、複数資料・実導入DBが2024-06-03で一致する一方、遊技通信系の初期記事に「2024年6月下旬予定」表記あり。実導入日として2024-06-03をcanonical化し、告知差はreleaseDateEvidenceに保持。
- 性能コアの主要数値に平均化すべきCONFLICTは現時点でなし。
- 純電源OFF→ONについては「内部状態RESET」の直接比較表はあるが、BBモード/有利区間の直接契約は不足。一般据え置き挙動から推定しない。

## missingFields
- 設定変更時BBモード選択率の設定別固定数値: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 本機固有のリールガックン条件/発生率: UNVERIFIED_AFTER_RESEARCH
- 設定変更/電断後の確定開始ステージ差: UNVERIFIED_AFTER_RESEARCH
- 純電源OFF→ON単独時のBBモード契約: UNVERIFIED_AFTER_RESEARCH
- 純電源OFF→ON単独時の有利区間契約: UNVERIFIED_AFTER_RESEARCH

## sources
取得日: 2026-09-14

### 業界/型式/導入
- P-WORLD NEWS / グリーンべると — 400枚BB&1G連搭載: https://news.p-world.co.jp/articles/27644/greenbelt
- P-WORLD NEWS / Amusement Japan — 400枚BB搭載の操が主役: https://news.p-world.co.jp/articles/27642/amusement
- P-WORLD NEWS / 遊技日本 — 型式・基本スペック: https://news.p-world.co.jp/articles/27650/nippon
- P-WORLD NEWS / 遊技日本 — 検定通過: https://news.p-world.co.jp/articles/27320/nippon
- HAZUSE — 機種情報: https://hazuse.com/hd/330628-2/

### 性能コア
- なな徹 — ボーナス確率/機械割/小役確率: https://nana-press.com/kaiseki/machine/761/21282/
- 一撃 — 機種解析TOP: https://1geki.jp/slot/s_aoharu_misao/
- HAZUSE — 基本スペック: https://hazuse.com/machine/pachislot/SX0076/genre/201/
- パチビー — 基本スペック: https://www.pachibee.jp/machines/index/224040008

### resetBehavior
- なな徹 — 朝一・設定変更時の挙動: https://nana-press.com/kaiseki/machine/761/21945/
- なな徹 — 有利区間リセット: https://nana-press.com/kaiseki/machine/761/21946/
- なな徹 — 天井/設定変更狙い: https://nana-press.com/kaiseki/machine/761/21943/
- ちょんぼりすた — 朝一リセット恩恵/電源OFF ON比較: https://chonborista.com/slot/daito-slot/210195/comment-page-2/
- 一撃 — BBモード解析: https://1geki.jp/slot/s_aoharu_misao/43/
- 回胴に散る。— BBモード移行・平均滞在G考察: https://kaidou.repop.jp/archives/1584

## researchNotes
- resetBehavior欠損探索では `アオハル♪操 A-LIVE` / `アオハル操` / `Sアオハル♪操 A-LIVE A2` / `大都技研` に、`設定変更` `リセット` `朝一` `据え置き` `電源OFF ON` `天井` `天井短縮` `BBモード` `モード移行` `ガックン` `有利区間` `有利区間ランプ` を組み合わせて再探索。
- 天井非搭載を理由にresetBehaviorをN/A一括処理せず、朝一BBモード抽選と有利区間挙動を分離して収集した。
- 設定示唆演出、小役の詳細設定差、CZ内部抽選など実機完全再現向け情報はミッション範囲外のため収集対象外。
