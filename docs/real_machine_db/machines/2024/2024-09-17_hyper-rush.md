# パチスロハイパーラッシュ

recordNo: 1675
machineName: パチスロハイパーラッシュ
aliases: ハイパーラッシュ / SハイパーラッシュSLC8 / HYPER RUSH
manufacturer: セブンリーグ製造 / 山佐ネクスト
formalModel: SハイパーラッシュSLC8
inspectionCode: 430212
releaseDate: 2024-09-17
generation: 6.5号機 / メダル機
systemType: AT / 復刻系擬似ノーマル（擬似ボーナス + SIDE-B） / 技術介入
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE_WITH_RESET_INTERNAL_STATE_AND_ADVANTAGEOUS_SECTION_UNVERIFIED_AND_CONFLICTS

## releaseAndModelEvidence
- 山佐ネクスト公式サイトで現行機「パチスロハイパーラッシュ」を確認。
- 遊技通信/P-WORLDおよび娯楽産業で、セブンリーグ製・山佐ネクスト発表、2024-09-17ホール導入を確認。
- HAZUSEで型式 `SハイパーラッシュSLC8`、検定番号 `430212`、2024-09-17導入を確認。
- 2024年検定通過一覧でも同型式・検定番号を照合。
confidence: OFFICIAL + INDUSTRY + MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- setting1: 98.9%（完全攻略100.5%）
- setting2: 99.9%（完全攻略101.5%）
- setting3: 102.0%（完全攻略103.7%）
- setting4: 104.0%（完全攻略106.2%）
- setting5: 105.9%（完全攻略108.6%）
- setting6: 108.1%（完全攻略111.0%）
initialHitBySetting:
- setting1: BIG 1/259.3 / REG 1/527.3 / 合算 1/173.8
- setting2: BIG 1/254.1 / REG 1/511.8 / 合算 1/169.8
- setting3: BIG 1/243.6 / REG 1/489.0 / 合算 1/162.6
- setting4: BIG 1/233.9 / REG 1/468.6 / 合算 1/156.0
- setting5: BIG 1/225.7 / REG 1/450.1 / 合算 1/150.3
- setting6: BIG 1/216.5 / REG 1/430.5 / 合算 1/144.0
baseGamesPer50: 約34G/50枚（設定1）
netIncrease:
- BIG前半「SIDE-A」: 約7.2枚/G
- BIG後半AT「SIDE-B」: 約2.5枚/G
basicPayout:
- ハイパーBIG: 平均約350枚（SIDE-B消化分を含む）
- チャレンジBIG: 平均約230枚（SIDE-B消化分を含む）
- REG: 導入時主要資料では平均約50枚
- SIDE-B: 1セット30G+α、純増約2.5枚/G
confidence: INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- 復刻系擬似ノーマル「タイプY」第2弾。通常時のボーナス当選契機はリーチ目役のみ。
- BIG:REG比率は概ね2:1。通常時のBIG当選時はハイパーBIG/チャレンジBIGが1:1。
- BIGはSIDE-AとSIDE-Bの2部構成。SIDE-B中のBIGはハイパーBIGとなり、50%以上でSIDE-Bを複数ストックする解析がある。
- 天井は主要複数資料・必勝本専用天井ページで「非搭載」。
- 通常時の演出モードはオリジナル / クラシック / マニアックの3種でユーザー選択可能。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_WITH_INTERNAL_STATE_ADVANTAGEOUS_SECTION_GAKKUN_UNVERIFIED_AND_CONFLICTS
resetQaLastUpdated: 2026-09-14

### settingChangeBehavior
- 天井は非搭載のため、天井ゲーム数の設定変更RESETは `NOT_APPLICABLE`。
- 必勝本の設定変更比較で、演出モードは設定変更後「オリジナル」へ戻ることを確認。
- 通常時のボーナス当選はリーチ目役フラグによる擬似ノーマル型で、主要解析ではゲーム数天井・朝一専用当選モードを確認できない。
- 設定変更時の内部状態そのものは、ちょんぼりすた等の機種専用朝一項目でも「調査中」。一般仕様からRESETと補完せず `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更時の有利区間の機種固有契約も十分な再探索後に固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_CEILING_AND_DISPLAY_MODE / UNVERIFIED_FOR_INTERNAL_STATE_AND_ADVANTAGEOUS_SECTION

### carryOverBehavior
- 天井・規定ゲーム数・スルー天井は非搭載のため、これらのCARRY_OVERは `NOT_APPLICABLE`。
- 設定据え置き時の内部状態/有利区間の機種固有契約は高信頼資料で固定できず `UNVERIFIED_AFTER_RESEARCH`。
- ホールの純電源OFF→ONを伴う据え置きでは、演出モードはオリジナルへ戻ることが別項で確認できるため、演出モードはCARRY_OVERしない。
confidence: ANALYSIS_HIGH_FOR_NOT_APPLICABLE_COUNTERS_AND_POWER_CYCLE_DISPLAY_MODE / UNVERIFIED_FOR_INTERNAL_STATE_AND_ADVANTAGEOUS_SECTION

### powerCycleBehavior
- 純電源OFF→ONでも演出モードは「オリジナル」へ戻る。
- 天井は非搭載のため、天井進行の引継ぎは `NOT_APPLICABLE`。
- 純電源OFF→ON時の内部状態・有利区間の機種固有契約は主要解析で「調査中」または直接記載を固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_DISPLAY_MODE_AND_NO_CEILING / UNVERIFIED_FOR_INTERNAL_STATE_AND_ADVANTAGEOUS_SECTION

### gameCounterReset
- ボーナス間ゲーム数天井、規定ゲーム数天井、スルー回数天井は非搭載。
- 朝一客AIが参照すべき内部天井ゲーム数は `NOT_APPLICABLE`。
- データ表示器の営業日カウンター挙動は実機内部天井と別定義のため本レコードでは混同しない。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### ceilingAfterReset
- 通常時天井: 非搭載。
- 設定変更後専用短縮天井: `NOT_APPLICABLE`。
- 必勝本の基本スペック概要には「天井 搭載」とする単独記載があるが、同社の専用「天井&設定変更」ページは到達条件/恩恵とも「ナシ」、パチマガスロマガ・一撃・ちょんぼりすた等も非搭載で一致するため、canonicalは非搭載。概要欄記載はCONFLICTとして保持。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH_WITH_CONFLICTING_SUMMARY_FIELD

### modeAfterReset
- ユーザー選択式の演出モードは設定変更時・純電源OFF→ON時とも「オリジナル」へ戻る。
- オリジナル/クラシック/マニアックは演出選択であり、ボーナス当選率を変える内部モードとは別物。
- 設定変更時専用の内部当選モード/朝一モード振り分けは再探索後も確認できず `NONE_CONFIRMED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_DISPLAY_MODE / NO_PUBLIC_RESET_LOTTERY_MODE_FOUND

### stateAfterReset
- 設定変更時・純電源OFF→ON時の内部状態は主要解析で調査中。
- リーチ目役フラグがボーナス当選契機であることは確認できるが、それだけを根拠に内部状態が存在しない/必ずRESETされるとは推定しない。
status: UNVERIFIED_AFTER_RESEARCH
confidence: UNVERIFIED

### advantageousSectionReset
- 本機は6.5号機AT機だが、設定変更/据え置き/純電源OFF→ONに対する有利区間の機種固有公開契約を固定できない。
- ちょんぼりすたの機種専用項目も有利区間を「調査中」としている。
- 一般的な6.5号機仕様から推定補完しない。
status: UNVERIFIED_AFTER_RESEARCH
confidence: UNVERIFIED

### resetBenefits
- 天井短縮: なし（天井非搭載）。
- 朝一専用モード振り分け: 確認できず。
- 朝一特定G数内の当選率優遇/CZ優遇: 確認できず。
- 演出モードがオリジナルへ戻ることは確認できるが、出玉上の恩恵ではない。
status: NONE_CONFIRMED_AFTER_RESEARCH
confidence: ANALYSIS_HIGH_FOR_NO_CEILING / NO_PUBLIC_RESET_BENEFIT_FOUND

### resetPenalties
- 出玉性能上の設定変更専用不利要素は公開資料から確認できない。
- プレイヤーが選択していたクラシック/マニアック等の演出モードは設定変更/電断でオリジナルへ戻る。
status: NONE_CONFIRMED_FOR_PAYOUT_PENALTY
confidence: ANALYSIS_HIGH_FOR_DISPLAY_MODE / NO_PUBLIC_PAYOUT_PENALTY_FOUND

### resetDetection
- 天井非搭載のため、短縮天井到達/据え置き越しによる変更判別は `NOT_APPLICABLE`。
- 演出モードは設定変更でも純電源OFF→ONでもオリジナルへ戻るため、オリジナル開始だけでは変更判別不能。
- 本機固有のリールガックン条件・発生率は「パチスロハイパーラッシュ」「SハイパーラッシュSLC8」「セブンリーグ」「山佐ネクスト」+「設定変更/リセット/朝一/据え置き/電源OFF ON/ガックン」で検索語を変え、公式・業界・主要解析・旧DB/回顧系を再探索したが固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 有利区間ランプ等による本機固有の確定判別も固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_NO_CEILING_AND_DISPLAY_MODE / UNVERIFIED_FOR_GAKKUN_AND_DIRECT_DETECTION

### numericResetData
normalGameCeiling: NOT_APPLICABLE_NO_CEILING
resetGameCeiling: NOT_APPLICABLE_NO_CEILING
resetModeDistribution: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
morningHitRate: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
resetBenefitRate: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
gakkunRate: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
confidence: ANALYSIS_HIGH_FOR_NO_CEILING / UNVERIFIED_FOR_UNPUBLISHED_RESET_NUMERICS

### publicMorningNumbers
- 設定変更専用の公開モード振り分け: 確認できず。
- 朝一特定G以内当選率: 確認できず。
- 短縮天井: `NOT_APPLICABLE`（天井非搭載）。
- 設定変更専用CZ/初当り数値: 確認できず。
- ガックン率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。

## conflicts
- `CONFLICT_CEILING_SUMMARY_FIELD`: 必勝本の基本スペック概要は「天井 搭載」と記載する一方、同社専用「天井&設定変更」ページは到達条件/恩恵とも「ナシ」。パチマガスロマガ・一撃・ちょんぼりすた・HAZUSE等も天井非搭載で一致するためcanonicalは「非搭載」。平均化/折衷しない。
- `CONFLICT_REG_AVERAGE_PAYOUT`: 2024年導入時の遊技通信/娯楽産業・必勝本・なな徹・パチマガスロマガ等はREG平均約50枚で一致。一撃の後年更新ページのみ平均75枚とするため両値を保持し、canonicalは導入時複数資料一致の平均約50枚。定義差または後年ページ差の原因は確定しない。

## missingFields
- resetBehavior.settingChangeBehavior.internalState: UNVERIFIED_AFTER_RESEARCH
- resetBehavior.carryOverBehavior.internalState: UNVERIFIED_AFTER_RESEARCH
- resetBehavior.powerCycleBehavior.internalState: UNVERIFIED_AFTER_RESEARCH
- resetBehavior.advantageousSectionReset: UNVERIFIED_AFTER_RESEARCH
- resetBehavior.resetDetection.gakkun: UNVERIFIED_AFTER_RESEARCH
- resetBehavior.resetDetection.advantageousSectionLamp: UNVERIFIED_AFTER_RESEARCH
- numericResetData.resetModeDistribution: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- numericResetData.morningHitRate: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- numericResetData.resetBenefitRate: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- numericResetData.gakkunRate: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH

## sources
retrievedAt: 2026-09-14
- 山佐ネクスト公式「パチスロハイパーラッシュ」: https://www1.yamasa.co.jp/nwhpr/
- P-WORLD / 遊技通信「増やすと当てるのハイブリッド！！『パチスロハイパーラッシュ』」: https://news.p-world.co.jp/articles/28823/yugitsushin
- 娯楽産業「山佐ネクスト 新機種『パチスロハイパーラッシュ』発表」: https://www.goraku-sangyo.com/%E5%B1%B1%E4%BD%90%E3%83%8D%E3%82%AF%E3%82%B9%E3%83%88%E3%80%80%E6%96%B0%E6%A9%9F%E7%A8%AE%E3%80%8C%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD%E3%83%8F%E3%82%A4%E3%83%91%E3%83%BC%E3%83%A9%E3%83%83%E3%82%B7/
- HAZUSE: https://hazuse.com/machine/pachislot/SX0084/
- Ativo 型式/検定番号: https://ativo.jp/2024/09/06/%EF%BD%93%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD%E3%83%8F%E3%82%A4%E3%83%91%E3%83%BC%E3%83%A9%E3%83%83%E3%82%B7%E3%83%A5/
- パチマガスロマガ 基本スペック: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sevenleague_slot/08/kh01.php
- パチマガスロマガ ゲームフロー: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sevenleague_slot/08/kh03.php
- パチマガスロマガ SIDE-B: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sevenleague_slot/08/at01.php
- 必勝本 基本スペック: https://p.hisshobon.jp/vpage/2643/2
- 必勝本 天井&設定変更: https://hisshobon.com/machineinfo/84547/
- 必勝本 システム解説: https://p.hisshobon.jp/vpage/2643/4
- 必勝本 ボーナス解説: https://hisshobon.com/machineinfo/84553/
- なな徹 解析まとめ: https://nana-press.com/kaiseki/machine/796/
- なな徹 ボーナス確率/機械割: https://nana-press.com/kaiseki/machine/796/22403/
- なな徹 REG: https://nana-press.com/kaiseki/machine/796/24079/
- 一撃 解析まとめ: https://1geki.jp/slot/s_hyper_rush/
- 一撃 BIG: https://1geki.jp/slot/s_hyper_rush/81/
- 一撃 REG: https://1geki.jp/slot/s_hyper_rush/85/
- ちょんぼりすた: https://chonborista.com/slot/yamasa-slot/217159/
- ALL7 2024年9月導入一覧: https://www.all7.jp/plans/index/2024/09
