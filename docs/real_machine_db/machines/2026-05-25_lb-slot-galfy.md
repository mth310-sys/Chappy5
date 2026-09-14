# LB スロット GALFY

recordNo: 1797
machineName: LB スロット GALFY
aliases: LBスロットGALFY / LBガルフィー / スマスロ ガルフィー / GALFY
manufacturer: オーイズミ・アミュージオ製造 / オーイズミ
formalModel: LBスロットガルフィーA4
inspectionCode: 5S1315
releaseDate: 2026-05-25
generation: 6.5号機 / スマスロ
systemType: リアルボーナス / ボーナストリガー（BT） / 技術介入 / 準完全告知
settings: L / 1 / 2 / 5 / 6
coreStatus: COMPLETE_CORE_WITH_RESET_RESEARCH

## releaseAndModelEvidence
- オーイズミ公式IR「スマスロ新機種『LB スロット GALFY』発売のお知らせ」で、機種名・型式名 `LB スロットガルフィーA4`・メーカー「オーイズミ・アミュージオ」を確認。
- 情報島+の検定通過記事でオーイズミ・アミュージオ `LBスロットガルフィーA4` を確認。
- HAZUSE/1gekiで検定番号 `5S1315`、2026-05-25導入を確認。
confidence: OFFICIAL / INDUSTRY / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
  marketListed:
  - setting1: 98.2%
  - setting2: 99.9%
  - setting5: 103.5%
  - setting6: 106.2%
  fullTechnicalPlay:
  - setting1: 100.3%
  - setting2: 102.2%
  - setting5: 105.9%
  - setting6: 108.7%
initialHitBySetting:
  bigBtCombined:
  - setting1: 1/295.2
  - setting2: 1/292.6
  - setting5: 1/284.9
  - setting6: 1/277.7
  reg:
  - setting1: 1/399.6
  - setting2: 1/360.1
  - setting5: 1/312.1
  - setting6: 1/277.7
  bonusCombined:
  - setting1: 1/169.8
  - setting2: 1/161.4
  - setting5: 1/148.9
  - setting6: 1/138.8
baseGamesPer50: 約35.7G/50枚（設定1）
netIncrease: NOT_APPLICABLE_REAL_BONUS_BT
basicPayout:
- BIG: 最大308枚または448枚以上（BT/GALFYループを含む一連の獲得）
- BIG前半: 最大181枚
- 通常JAC: 最大129枚
- SP JAC: 最大142枚
- REG: 最大103枚
modeSpecificMinimumData:
- BIG後にBTが発動しJAC INチャンスへ。SP JAC入賞時はBTが再発動してGALFYループを継続。
- BTループ率は業界販売資料で約20%。
- 天井非搭載。通常時は毎ゲームのリアルボーナス抽選が中心で、ゲーム数・周期・ポイント・スルーによる天井救済はない。
confidence: ANALYSIS_HIGH / INDUSTRY / MULTI_SOURCE_MATCH

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_MULTI_QUERY_MULTI_SOURCE
resetQaLastUpdated: 2026-09-15

### settingChangeBehavior
- 天井非搭載のリアルボーナス+BT機であり、設定変更による天井短縮・朝一専用ゲーム数・周期/ポイント/スルー恩恵は `NOT_APPLICABLE`。
- 公開解析では朝一も設定に応じた通常のボーナス抽選とされ、設定変更専用のモード/状態による天井狙い要素は確認されていない。
- 設定変更時のリアルボーナス成立フラグ、BT/JAC権利等を含む電源操作の厳密な内部契約は、型式名/メーカー名と設定変更・リセット・朝一を組み替えて再探索したが高優先資料で直接固定できず `UNVERIFIED_AFTER_RESEARCH`。一般則から推測しない。
confidence: ANALYSIS_HIGH_FOR_NO_CEILING_OR_RESET_BENEFIT / UNVERIFIED_FOR_LOW_LEVEL_INTERNAL_FLAG_CONTRACT

### carryOverBehavior
- 天井・ゲーム数モード・周期・ポイント・スルー天井が存在しないため、それらの据え置き引継ぎは `NOT_APPLICABLE`。
- 前日据え置きだけを条件にした機種固有の内部状態・BT/JAC権利比較は、表記揺れ・型式・メーカー名と「据え置き」「朝一」「天井」「BT」「ボーナストリガー」を変えて再探索したが高優先資料で固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_NOT_APPLICABLE_CEILING_FIELDS / UNVERIFIED_FOR_LOW_LEVEL_INTERNAL_FLAG_CONTRACT

### powerCycleBehavior
- 純電源OFF→ONについて、天井/モード/状態による朝一狙い要素は確認されていない。
- 設定変更・据え置き・純電源OFF→ONを三者比較してリアルボーナス成立フラグやBT/JAC権利を直接説明する本機固有の高優先公開資料は、検索語を変更した再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: UNVERIFIED_AFTER_RESEARCH_FOR_LOW_LEVEL_INTERNAL_CONTRACT

### gameCounterReset
settingChange:
- ceilingGameCounter: NOT_APPLICABLE_NO_CEILING
- cyclePointThroughCounter: NOT_APPLICABLE
carryOver:
- ceilingGameCounter: NOT_APPLICABLE_NO_CEILING
- cyclePointThroughCounter: NOT_APPLICABLE
powerCycle:
- ceilingGameCounter: NOT_APPLICABLE_NO_CEILING
- cyclePointThroughCounter: NOT_APPLICABLE
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### ceilingAfterReset
normalCeiling: NONE
resetCeiling: NONE
shortening: NONE
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 天井狙いに結び付く通常モード、朝一専用モード、規定ゲーム数モードは確認されていない。
- ノーマル/クラシック/先ガルフィーの3演出モードは遊技者が選択する演出モードであり、設定変更時の内部モードとして扱わない。
confidence: ANALYSIS_HIGH_FOR_NO_RESET_TARGET_MODE

### stateAfterReset
- AT/CZ機のような高確・低確や規定ゲーム数状態による朝一狙い要素は確認されていない。
- リアルボーナス成立後・BT/JAC INチャンス中等の特殊な遊技状態をまたぐ電源操作の厳密な機種固有契約は `UNVERIFIED_AFTER_RESEARCH` とし、実機完全再現用の推測補完を行わない。
confidence: ANALYSIS_HIGH_FOR_NO_GENERAL_RESET_STATE_BENEFIT / UNVERIFIED_FOR_EXCEPTIONAL_IN_PROGRESS_STATE

### advantageousSectionReset
- 本機はスマスロBT機だが、設定変更/据え置き/純電断について「有利区間」の朝一挙動を直接説明する機種固有資料を高優先ソースで固定できなかった。
- 天井・朝一モード・状態恩恵がないことを根拠に、有利区間そのものの処理を推定しない。
status: UNVERIFIED_DIRECT_WORDING_AFTER_RESEARCH
confidence: UNVERIFIED_AFTER_RESEARCH

### resetBenefits
- 天井短縮: NONE / NOT_APPLICABLE
- 朝一専用モード: NONE_CONFIRMED
- 朝一のボーナス確率は設定に応じた通常抽選とされ、リセット専用の初当たり優遇数値は確認されていない。
- ゲーム数/周期/ポイント/スルーによるリセット恩恵: NONE / NOT_APPLICABLE
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### resetPenalties
- 設定変更時だけ適用される公開マイナス期待値、朝一不利専用モード、天井延長等は検索語・資料系統を変えた再探索後も `NONE_CONFIRMED_AFTER_RESEARCH`。
confidence: NONE_CONFIRMED_AFTER_RESEARCH

### resetDetection
- 確実な設定変更判別方法は公開解析上「調査中」。
- 本機固有のリールガックン条件・発生率は、`GALFY/ガルフィー/LBスロットガルフィーA4/オーイズミ・アミュージオ` と「ガックン」「設定変更」「据え置き」「朝一」を組み替えて再探索したが固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 天井がないため、特定ゲーム数超過による設定変更/据え置き判別は `NOT_APPLICABLE`。
confidence: ANALYSIS_SINGLE_FOR_PUBLIC_INVESTIGATING_STATUS / UNVERIFIED_FOR_GAKKUN

### numericResetData
resetCeiling: NONE
resetModeDistribution: NOT_APPLICABLE_OR_NONE_CONFIRMED
resetSpecificHitRate: NONE_CONFIRMED
resetBenefitRate: NONE_CONFIRMED
gakkunRate: UNVERIFIED_AFTER_RESEARCH
confidence: ANALYSIS_HIGH_FOR_NO_CEILING / UNVERIFIED_FOR_GAKKUN

## conflicts
- 業界販売資料G-netは出玉率を設定1 `97.6～98.2%`、設定2 `99.4～99.9%`、設定5 `102.6～103.5%`、設定6 `105.6～106.2%` のレンジで掲載。一方、パチビー・1geki・6確・ジャグラーズネット等は通常掲載値を `98.2/99.9/103.5/106.2%`、完全攻略値を `100.3/102.2/105.9/108.7%` として一致。
- G-netのレンジは打ち方/取得条件差を含む販売時レンジとみられるため平均化せず別定義として保持し、物差しのcanonical通常掲載値には複数解析一致の98.2/99.9/103.5/106.2%を採用。
- メーカー表記は親会社オーイズミと製造元オーイズミ・アミュージオが資料により混在。公式IRはメーカーを「オーイズミ・アミュージオ」と明記するため、製造元canonicalはオーイズミ・アミュージオ、オーイズミは発売発表・ブランド側として併記。

## missingFields
- 設定変更/据え置き/純電源OFF→ONのリアルボーナス成立フラグ・BT/JAC権利に関する機種固有三者比較
- 設定変更/据え置き/純電断時の有利区間そのものの直接文言
- 本機固有ガックン条件/発生率

## sources
retrievedAt: 2026-09-15
- オーイズミ公式IR「スマスロ新機種 LB スロット GALFY 発売のお知らせ」: https://oizumi.co.jp/wp-content/uploads/2026/03/7c7210608798efdd57bfff9e9451df4e.pdf
- オーイズミ公式機種ページ（HAZUSE経由で公式URL確認）: https://www.oizumi.co.jp/machine/galfy/
- 情報島+ 検定通過（製造業者/型式）: https://p-johojima.jp/new_machine/post-24744/
- 情報島+ 過去の新台情報（2026-05-25導入群）: https://p-johojima.jp/machine_spec/post-2074/
- HAZUSE（型式・検定番号・導入日・天井なし）: https://hazuse.com/machine/pachislot/5S1315/
- 1geki（型式・メーカー・基本スペック）: https://1geki.jp/slot/lb_galfy/
- 1geki オンライン遊技説明（設定別BB/RB/合算/機械割）: https://1geki.jp/slot/lb_galfy/39/
- パチビー（基本スペック・通常/完全攻略機械割・獲得枚数）: https://www.pachibee.jp/machines/index/226040004
- 6確（基本スペック・天井/朝一/リセット調査）: https://www.kaku6.jp/slot/galfy/
- ジャグラーズネット（基本スペック照合）: https://jugglersnet.com/bt/galfy
- ちょんぼりすた（約35.7G/50枚・獲得性能・天井なし）: https://chonborista.com/slot/oizumi-slot/257968/
- G-net（販売概要・設定別出玉率レンジ・BTループ率20%）: https://g-net-ps.com/info/s0266/
- グリーンべると/P-WORLD業界ニュース（発表・ボーナス合算）: https://news.p-world.co.jp/articles/33478/greenbelt
