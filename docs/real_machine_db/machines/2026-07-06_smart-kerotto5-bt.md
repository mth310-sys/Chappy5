# スマスロ ケロット5BT

recordNo: 1803
machineName: スマスロ ケロット5BT
aliases: スマスロケロット5BT / ケロット5BT / LBケロット5ND05H
manufacturer: 山佐ネクスト
formalModel: LBケロット5ND05H
releaseDate: 2026-07-06
generation: 6.5号機 / スマスロ
systemType: ノーマル / リアルボーナス / ボーナストリガー(BT)
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE_WITH_RESET_RESEARCH

## releaseAndModelEvidence
- 遊技通信/P-WORLD、遊技日本、情報島+等の業界記事で山佐ネクスト「スマスロケロット5BT」、型式 `LBケロット5ND05H` を確認。
- G-net販売資料で納品日2026-07-05、開店日2026-07-06を確認。複数解析サイトも導入開始日2026-07-06で一致。
confidence: INDUSTRY / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- setting1: 98.2%
- setting2: 99.1%
- setting3: 101.1%
- setting4: 104.5%
- setting5: 107.0%
- setting6: 111.0%
initialHitBySetting:
  bigCombined:
  - setting1: 1/232.4
  - setting2: 1/230.8
  - setting3: 1/229.1
  - setting4: 1/218.5
  - setting5: 1/215.6
  - setting6: 1/204.8
  regular:
  - setting1: 1/350.5
  - setting2: 1/341.3
  - setting3: 1/324.4
  - setting4: 1/299.3
  - setting5: 1/274.2
  - setting6: 1/239.2
  bonusCombined:
  - setting1: 1/139.7
  - setting2: 1/137.7
  - setting3: 1/134.3
  - setting4: 1/126.3
  - setting5: 1/120.7
  - setting6: 1/110.3
baseGamesPer50: 約37G/50枚（設定1）
netIncrease: N/A_REAL_BONUS_BT
basicPayout:
- SUPER BIG BONUS: 約317枚（BT含む）
- BIG BONUS: 最大209枚
- REGULAR BONUS: 84枚固定
modeSpecificMinimumData:
- SBBとBIGの比率は全設定共通1:1。
- 設定1のBB系:REG当選割合は約6:4。
- 天井機能非搭載。
confidence: ANALYSIS_HIGH / INDUSTRY / MULTI_SOURCE_MATCH

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_MULTI_QUERY_MULTI_SOURCE
resetQaLastUpdated: 2026-09-15

### settingChangeBehavior
- 天井非搭載のリアルボーナス+BT機のため、ゲーム数天井・周期天井・AT/CZ天井のリセット契約はN/A。
- 必勝本の機種固有「設定変更&電源OFF/ON」比較で公開されている項目は演出モードのみで、設定変更時は「現在調査中」。
- 設定変更時の演出モード初期化/保持、ボーナス成立内部状態等について、機種固有の確定公開資料は再探索後も固定できずUNVERIFIED_AFTER_RESEARCH。
confidence: ANALYSIS_HIGH_FOR_NO_CEILING / UNVERIFIED_FOR_MACHINE_SPECIFIC_STATE

### carryOverBehavior
- 天井非搭載のためゲーム数/周期天井引継ぎはN/A。
- 据え置き時の演出モード、ボーナス成立内部状態等について機種固有の確定公開比較は再探索後も固定できずUNVERIFIED_AFTER_RESEARCH。
confidence: UNVERIFIED_MACHINE_SPECIFIC_AFTER_RESEARCH

### powerCycleBehavior
- 天井非搭載のためゲーム数/周期天井引継ぎはN/A。
- 必勝本の直接比較では電源OFF→ON時の演出モードは「現在調査中」。
- その他の機種固有状態の純電断復帰契約は再探索後もUNVERIFIED_AFTER_RESEARCH。
confidence: ANALYSIS_HIGH_FOR_PUBLISHED_UNDER_RESEARCH_STATUS

### gameCounterReset
settingChange: N/A_NO_CEILING
carryOver: N/A_NO_CEILING
powerCycle: N/A_NO_CEILING
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### ceilingAfterReset
normalCeiling: NONE
resetCeiling: N/A
- パチマガスロマガ、必勝本、P-WORLD、ちょんぼりすたで天井非搭載を照合。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 通常時にはノーマル/スゴロク/虹河ラキの3演出モードを搭載。
- 設定変更/据え置き/純電断時の演出モード初期化・保持は必勝本でも現在調査中で、再探索後も確定できずUNVERIFIED_AFTER_RESEARCH。
- AT機のような朝一専用当選モード/天井モードの存在は確認されていない。
confidence: UNVERIFIED_FOR_RESET_CONTRACT

### stateAfterReset
- 高確・CZ・AT等の通常時内部状態管理を主要初当たり構造とする機種ではない。
- ボーナス成立内部フラグ等の設定変更/据え置き/電断契約は実機完全再現領域でもあり、機種固有公開資料を固定できずUNVERIFIED_MACHINE_SPECIFIC_AFTER_RESEARCH。
confidence: UNVERIFIED_MACHINE_SPECIFIC_AFTER_RESEARCH

### advantageousSectionReset
- 本機固有の有利区間について、設定変更/据え置き/純電断を直接比較する高信頼資料を再探索後も固定できずUNVERIFIED_AFTER_RESEARCH。
- BT/リアルボーナス機であることから一般論で「有利区間なし」と推測補完しない。
confidence: UNVERIFIED_AFTER_RESEARCH

### resetBenefits
- 天井短縮、朝一専用モード、朝一CZ/初当たり優遇などの公開数値恩恵は、表記揺れ・型式名・メーカー名と「設定変更/リセット/朝一/据え置き/電源OFF ON/天井/ガックン/有利区間」を組み替えて再探索したが確認できずNONE_CONFIRMED_AFTER_RESEARCH。
confidence: NONE_CONFIRMED_AFTER_RESEARCH

### resetPenalties
- 設定変更専用の不利モード、天井延長、初当たり冷遇等の公開仕様は確認できずNONE_CONFIRMED_AFTER_RESEARCH。
confidence: NONE_CONFIRMED_AFTER_RESEARCH

### resetDetection
- 本機固有のガックン条件/発生率、ランプ・液晶等による朝一即時変更判別は再探索後もUNVERIFIED_AFTER_RESEARCH。
- 天井非搭載のため、短縮天井到達による事後判別もN/A。
confidence: UNVERIFIED_AFTER_RESEARCH

### numericResetData
normalCeiling: NONE
resetCeiling: N/A
publicResetModeDistribution: NONE_CONFIRMED_AFTER_RESEARCH
publicMorningHitBenefit: NONE_CONFIRMED_AFTER_RESEARCH
gakkunRate: UNVERIFIED_AFTER_RESEARCH
confidence: ANALYSIS_HIGH_FOR_NO_CEILING / UNVERIFIED_FOR_OTHER_RESET_NUMERICS

## conflicts
- 基本性能のcanonicalは必勝本、G-net、P-WORLD、パチビー等の一致値を採用。
- ニコナナ動画概要に設定5 BIG合算1/225.6・設定6機械割110.0%という異値がある一方、必勝本/G-net/P-WORLD/パチビー/情報島+等は設定5 BIG合算1/215.6・設定6機械割111.0%で一致。平均せず `CONFLICT_NICONANA_SETTING5_BIG_225_6_AND_SETTING6_PAYOUT_110_0` として隔離し、多数一致側をcanonicalとする。
- PShortは設定3 BIGを1/229.2、設定4を1/218.4とするが、主要複数資料は1/229.1・1/218.5。丸め/転記差候補としてcanonicalは多数一致側。

## missingFields
- 設定変更/据え置き/純電断時の演出モード契約
- 本機固有ガックン条件/発生率
- 本機固有の有利区間の設定変更/電断契約
- 朝一即時変更判別

## sources
retrievedAt: 2026-09-15
- P-WORLD/遊技通信 発表記事: https://news.p-world.co.jp/articles/33409/yugitsushin
- 遊技日本 発売記事: https://yugi-nippon.com/pachinko-new-machine/post-76594/
- 情報島+ 検定通過: https://p-johojima.jp/new_machine/post-28691/
- G-net 販売概要: https://g-net-ps.com/info/s0273/
- 必勝本 基本スペック: https://hisshobon.com/machineinfo/89852/
- 必勝本 天井&設定変更: https://hisshobon.com/machineinfo/137930/
- P-WORLD 機種DB: https://www.p-world.co.jp/machine/database/10479
- パチマガスロマガ 機種概要: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasanext_slot/15/kh01.php
- パチビー: https://www.pachibee.jp/machines/index/226060004
- 情報島+ 機種概要: https://p-johojima.jp/machine_spec/post-30724/
- ちょんぼりすた: https://chonborista.com/slot/yamasa-slot/258812/
- ニコナナ（競合値確認）: https://www.niconana.net/movie/%E6%96%B0%E5%8F%B0%E3%80%90%E3%82%B9%E3%83%9E%E3%82%B9%E3%83%AD-%E3%82%B1%E3%83%AD%E3%83%83%E3%83%885bt%E3%80%91sbb%E3%81%AA%E3%82%89%E7%B4%84317%E6%9E%9A-%E7%B4%8D%E5%BE%97%E5%87%BA%E7%8E%89/
