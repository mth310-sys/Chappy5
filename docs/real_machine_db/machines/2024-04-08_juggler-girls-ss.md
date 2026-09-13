# ジャグラーガールズSS

recordNo: 1639
machineName: ジャグラーガールズSS
aliases: ジャグラーガールズ / SジャグラーガールズSS-KH / ジャグガ
manufacturer: 北電子
formalModel: SジャグラーガールズSS-KH
inspectionCode: 330257
releaseDate: 2024-04-08
generation: 6号機 / メダル機
systemType: ノーマルAタイプ / 完全告知
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE

## releaseDateEvidence
- 北電子公式製品ページ、遊技通信・遊技日本・アミューズメントジャパン・グリーンべると、P-WORLD/HAZUSE系機種DBが2024-04-08導入で一致。
- 2024-04-08群の業界新台スケジュールでも同日導入4機の1機として掲載。
confidence: OFFICIAL + INDUSTRY / MULTI_SOURCE_MATCH

## modelEvidence
- 北電子公式検定情報に `SジャグラーガールズSS-KH` を掲載。
- 遊技日本の検定通過記事、P-WORLD、HAZUSEが同型式を確認。
- P-WORLD/HAZUSEは検定番号 `330257` を同型式に紐付ける。
confidence: OFFICIAL + INDUSTRY + ANALYSIS_HIGH

## corePerformance
payoutRateBySetting:
- setting1: 97.0%
- setting2: 97.9%
- setting3: 99.9%
- setting4: 102.1%
- setting5: 104.0%
- setting6: 107.5%
initialHitBySetting:
- setting1: BIG 1/273.1 / REG 1/381.0 / total 1/159.1
- setting2: BIG 1/270.8 / REG 1/350.5 / total 1/152.8
- setting3: BIG 1/260.1 / REG 1/316.6 / total 1/142.8
- setting4: BIG 1/250.1 / REG 1/281.3 / total 1/132.4
- setting5: BIG 1/243.6 / REG 1/270.8 / total 1/128.3
- setting6: BIG 1/226.0 / REG 1/252.1 / total 1/119.2
baseGamesPer50: 約42G/50枚
netIncrease: N/A（ノーマルタイプ）
basicPayout:
- BIG: 約240枚（266枚を超える払い出しで終了）
- REG: 約96枚（98枚を超える払い出しで終了）
confidence: OFFICIAL + INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- GOGO!ランプ点灯でボーナスを告知する完全告知ノーマルAタイプ。
- 天井非搭載。
- AT/CZ、ゲーム数天井、通常/天国モード、周期抽選は主要初当たり構造として非該当。
- スペシャルボーナス音にはボーナス後ゲーム数条件があるため、朝一のBGM条件引継ぎが変更判別材料になる。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_WITH_LATER_ANALYSIS_UPDATE_AND_NO_PUBLIC_NUMERIC_RESET_RATE
resetQaLastUpdated: 2026-09-14

### settingChangeBehavior
- 天井・規定ゲーム数は非搭載のため天井RESETは N/A。
- 後年更新された機種専用朝一資料では、設定変更時はクレジット、BET状態、スペシャルBGM変化条件がリセットされる。
- 同資料では設定変更後（同一設定への打ち変えを含む）の朝一1G目にリールガックンありと整理される。
- ただしガックンは個体差・店側対策があり、設定変更確定手段ではない。
confidence: ANALYSIS_HIGH_FOR_RESET_TABLE / OFFICIAL_AND_MULTI_SOURCE_FOR_MACHINE_STRUCTURE

### carryOverBehavior
- 天井・AT/CZモード・周期は非搭載のため、それらの据え置き引継ぎは N/A。
- 機種専用朝一資料は、据え置きではスペシャルBGM変化条件を引き継ぐとしている。
- 前日ヤメG数 + 当日朝一当選G数がスペシャルBGM条件に一致し、該当BGMが流れた場合は据え置き推測材料。ただしプレミアム演出由来のBGM発生があるため確定ではない。
confidence: ANALYSIS_HIGH

### powerCycleBehavior
- 電源OFF→ONのみではリールガックンなし、クレジット・BET状態・スペシャルBGM変化条件を引き継ぐと機種専用朝一資料が明記。
- 天井・AT/CZモード・周期は非搭載のため、それらの電断引継ぎは N/A。
confidence: ANALYSIS_HIGH

### gameCounterReset
- 天井用ゲーム数: N/A（天井非搭載）。
- スペシャルBGM条件に関わるボーナス後ゲーム数履歴は、設定変更で条件リセット、据え置き/純電断で引継ぎとして扱われる。
confidence: ANALYSIS_HIGH

### ceilingAfterReset
- 天井非搭載。
- 設定変更専用の短縮天井なし / N/A。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- AT/CZ型の通常モード・天国モード・朝一専用モードは非該当。
- 設定変更時モード振り分け数値: N/A。
confidence: ANALYSIS_HIGH_AT_MISSION_GRANULARITY

### stateAfterReset
- AT/CZ用の通常/高確等、ホール経営・朝一客AIへ影響する設定変更専用内部状態は本機の初当たり構造では N/A。
- スペシャルBGM条件はresetDetection/gameCounterResetへ分離。
confidence: ANALYSIS_HIGH_AT_MISSION_GRANULARITY

### advantageousSectionReset
- ノーマルAタイプで、朝一客行動へ影響するAT型の有利区間天井/モード管理は本DB比較粒度では N/A。
- 内部規則を一般論から推測補完しない。
confidence: NOT_APPLICABLE_AT_MISSION_GRANULARITY

### resetBenefits
- 天井短縮、朝一専用AT/CZモード、規定ゲーム数優遇は N/A。
- 設定変更固有の当選率優遇・短縮天井等の主要定量恩恵は確認されない。
confidence: ANALYSIS_HIGH / MACHINE_STRUCTURE

### resetPenalties
- 設定変更時固有の主要な定量的不利要素は、表記揺れ・正式型式・メーカー・シリーズ名と検索語を変えた再探索後も確認できず `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 後年更新の機種専用朝一資料では設定変更後1G目のリールガックンあり、電源OFF→ONのみではなし。
- 同一設定への打ち変えでもガックン対象。
- ガックンには個体差があり、ホール側でリールを動かす/変更後1G回す等の対策が可能なため単独で確定判別には使えない。
- スペシャルBGM変化条件は設定変更でリセット、据え置き/純電断で引継ぎ。前日+当日ゲーム数とBGM条件の一致は据え置き推測材料になるが、プレミアム演出時のBGM発生に注意。
confidence: ANALYSIS_HIGH_FOR_LATER_UPDATED_RESET_TABLE

### numericResetData
- 設定変更時短縮天井: N/A
- 設定変更時モード振り分け: N/A
- 朝一特定ゲーム数以内当選率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH / 専用固定値なし
- 設定変更専用CZ/AT数値: N/A
- ガックン発生率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH

### publicMorningNumbers
- 設定変更専用の天井短縮・モード振り分け・当選率は N/A。
- ガックンの固定発生率は公開値を確認できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 朝一判別は定量恩恵ではなく、1G目のリール挙動とBGM条件引継ぎを用いる定性的推測が中心。

## conflicts
- 天井について、必勝本旧基本スペックページのメタ欄に「天井 搭載」とする表記が残る一方、同媒体の専用「天井&設定変更」ページでは到達条件「ナシ」。P-WORLD、パチマガスロマガ、HAZUSE系も天井非搭載で一致するため、`CONFLICT_SOURCE_METADATA_CEILING_FLAG` として旧メタ表記を残し、canonicalは天井非搭載。
- リセット判別について、必勝本の2024-04-05当時ページではガックン/スペシャルBGMとも「現在調査中」だが、後年更新されたパチマガスロマガFREEの機種専用朝一表では具体契約が公開された。相反する固定値ではなく解析更新時系列差として `LATER_ANALYSIS_UPDATE` 扱い。

## missingFields
- 設定変更時ガックンの固定発生率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 設定変更専用の当選率/モード数値: N/A / PUBLIC_DEDICATED_VALUE_NOT_APPLICABLE

## groupAudit
- 2024-04-08群のknown 4候補の1機目。
- 業界新台スケジュールで同日候補は `ジャグラーガールズSS / スマスロ ゴールデンカムイ / Lうる星やつら / ストライク・ザ・ブラッド` の4機を確認。
- 本機は北電子 `SジャグラーガールズSS-KH` として正式型式を分離確認済み。
- 残り3候補を順次処理後、PB・別型式・地域先行・延期/段階導入を再監査して群CLOSED判定する。

## sources
取得日: 2026-09-14
- 北電子公式 製品情報: https://www.kitadenshi.co.jp/slot/jugglergirlsss/
- 北電子公式 検定情報: https://www.kitadenshi.co.jp/slot-kentei/jugglergirlsss/
- 遊技日本 / P-WORLD 発表・型式: https://news.p-world.co.jp/articles/26946/nippon
- 遊技通信 / P-WORLD 導入日・型式: https://news.p-world.co.jp/articles/26965
- アミューズメントジャパン / P-WORLD: https://news.p-world.co.jp/articles/26931/amusement
- グリーンべると / P-WORLD 発表: https://news.p-world.co.jp/articles/26934/greenbelt
- グリーンべると 2024-04-08新台スケジュール: https://news.p-world.co.jp/articles/27485/greenbelt
- P-WORLD機種DB: https://www.p-world.co.jp/machine/database/10009
- HAZUSE機種DB: https://hazuse.com/hd/330257-2/
- パチマガスロマガ 基本情報: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kitac_slot/124/kh01.php
- パチマガスロマガFREE 朝イチ・設定変更: https://pachimaga.com/free/mach/maker-s/kitac/064363.php
- 必勝本 天井&設定変更（2024-04-05時点）: https://hisshobon.com/machineinfo/83119/
- 必勝本 コイン持ち実戦値: https://hisshobon.com/machineinfo/83123/
- ぽこすろっと リセット判別: https://www.nankaikoya.jp/jugglergirls-ss/

## recordQuality
coreConfidence: OFFICIAL + INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH
resetConfidence: ANALYSIS_HIGH_WITH_LATER_UPDATE
missingPolicy: RESEARCH_EXHAUSTED_BEFORE_UNVERIFIED
conflictPolicy: SOURCE_METADATA_CONFLICT_PRESERVED_NOT_AVERAGED
