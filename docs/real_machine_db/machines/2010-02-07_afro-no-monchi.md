# アフロのモンチ

machineName: アフロのモンチ
manufacturer: SNKプレイモア
formalModelName: アフロノモンチS / アフロのモンチS（表記差）
approvalNumber: 9S1003
releaseDate: 2010-02-07
generation: 5号機
systemType: ノーマル / ボーナス主体 / 技術介入 / 5GプチRT演出
coreStatus: COMPLETE_CORE_WITH_RESET_PARTIAL

## chronologyNote

- 最新main 448件 / chronologicalFrontier 2010-02-08「パチスロスーパー海物語」から、直前境界の遡及漏れとして追加。
- 当時グリーンべると（2010-01-15）は型式名「アフロノモンチS」、納品は **2010-02-07から** と明記。
- HAZUSE DATAも導入開始日 **2010-02-07**。pacnk / 5号機クロニクル / P-WORLDは2010年2月として整合。
- K-Naviだけは「2009年2月8日」と記載するが、2010-01-15の発表記事より前になるため、他系統と1年ずれる `LIKELY_METADATA_ERROR` と判断し、導入日の主値には採用しない。
- repo検索で既存レコードなしを確認して449件目として追加。

## payoutRateBySetting

- 設定1: 95.1%
- 設定2: 96.7%
- 設定3: 100.0%
- 設定4: 104.2%
- 設定5: 107.7%
- 設定6: 112.5%

P-WORLD / pacnk / 5号機クロニクルで一致。

confidence: ANALYSIS_HIGH / MULTI_SOURCE_CORROBORATED

## initialHitBySetting

### BIG
- 設定1: 1/289.9
- 設定2: 1/280.0
- 設定3: 1/270.8
- 設定4: 1/260.0
- 設定5: 1/248.2
- 設定6: 1/239.1

### REG
- 設定1: 1/474.9
- 設定2: 1/455.1
- 設定3: 1/425.5
- 設定4: 1/390.1
- 設定5: 1/348.6
- 設定6: 1/289.9

### ボーナス合算
- 設定1: 1/180.0
- 設定2: 1/173.3
- 設定3: 1/165.4
- 設定4: 1/156.0
- 設定5: 1/144.9
- 設定6: 1/131.0

K-Navi / P-WORLD / pacnkで一致し、HAZUSE DATAの精密系列（丸め差あり）とも整合。

confidence: ANALYSIS_HIGH / MULTI_SOURCE_CORROBORATED

## baseGamesPer50

旧パチマガスロマガの「1000円あたりのゲーム数」直接値:
- 設定1: **35.01G**
- 設定2: **35.12G**
- 設定3: **35.24G**
- 設定4: **36.15G**
- 設定5: **36.77G**
- 設定6: **37.08G**

1000円=50枚貸しの比較用ベースとして採用。小役確率からの逆算値ではない。

confidence: ANALYSIS_HIGH / DIRECT_ARCHIVE_VALUE

## netIncrease

- ボーナス出玉増加用のART/ATはなし。
- 通常時の特定15枚役成立後に **5GのプチRT**へ移行するが、P-WORLD/pacnkは演出用RTとして扱い、出玉の主軸はBIG/REGのみ。
- 物差し比較用の持続ART純増値: NOT_APPLICABLE

confidence: INDUSTRY / ANALYSIS_HIGH

## basicPayout

- BIG（スーパーモンチパーティ）: **MAX311枚** — 当時グリーンべると / P-WORLD / 旧パチマガで一致。
- REG（モンチパーティ）: **CONFLICT**
  - **MAX116枚** — 当時グリーンべると / P-WORLD
  - **MAX104枚** — 旧パチマガスロマガ基本システムページ
- REGの規定払い出しは119枚表記で共通するが、実獲得MAX表記が競合するため平均・補正せず双方保持。

confidence: CONFLICT / MULTI_SOURCE

## modeSpecificMinimumData

- ボーナスのみで出玉を増やすノーマルタイプ。
- 2種類の特定15枚役成立後、5GのプチRTへ移行。移行先3ステージでボーナス期待度を示唆する。
- ゲーム数解除型通常モード、ART/AT、周期CZ、ストック機能は確認されない。
- 本機固有の通常ゲーム数天井は十分な再探索後も確認されず、旧パチマガも「攻め時・ヤメ時→特にナシ」とするため `NO_CEILING_CONFIRMED_AFTER_RESEARCH`。

confidence: INDUSTRY / ANALYSIS_HIGH

## resetBehavior — v0.7

settingChangeBehavior: **NO_PUBLISHED_SPECIAL_RESET_BEHAVIOR_CONFIRMED_AFTER_RESEARCH**。`設定変更 / リセット / 朝一 / 型式名 / メーカー名`を組み替え、当時解析・旧DB・回顧資料を横断したが、設定変更専用の天井短縮・朝一高確・当選優遇等を直接確認できない。

carryOverBehavior: **NO_PERSISTENT_GAME_COUNT_OR_MODE_RESOURCE_CONFIRMED**。通常ゲーム数天井、ゲーム数モード、ART/ATストック、周期CZ等の据え置き対象資源を確認しない。5GプチRTは役成立契機の短時間演出状態であり、その閉店跨ぎ挙動は別項目で未確認とする。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ON時に5GプチRT状態を継続/消去するかを本機固有資料で確定できず。朝一性能へ影響するその他の公開処理は確認なし。

gameCounterReset: **NOT_APPLICABLE_NO_GAME_COUNT_CEILING_CONFIRMED**。天井/周期用の持続ゲームカウンタを確認しない。

ceilingAfterReset: **NOT_APPLICABLE_NO_CEILING_CONFIRMED**。設定変更専用の短縮天井も確認されない。

modeAfterReset: **NOT_APPLICABLE_NO_GAME_COUNT_MODE_CONFIRMED**。3種類のプチRTステージは5Gの演出状態で、朝一狙いに用いる通常ゲーム数モードとは区別する。

stateAfterReset: **UNVERIFIED_AFTER_RESEARCH_TRANSIENT_MINI_RT**。設定変更/電源OFF→ON時に、成立済みの5GプチRTが残るか消えるかの直接根拠を確定できない。長期持続する高確/CZ/ART/AT状態は確認されない。

advantageousSectionReset: **NOT_APPLICABLE**（5号機・有利区間制度前）

resetBenefits: **NONE_CONFIRMED_AFTER_RESEARCH**。設定変更専用の短縮天井、高確移行率、ボーナス/CZ当選優遇等の公開恩恵を確認できず。

resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。設定変更時のみ失われる公開済みストック/天井進捗等を確認しない。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。`ガックン / 初期出目 / 朝一出目 / 変更判別 / 据え置き / 設定変更`まで検索語を拡張したが、本機固有の客側変更判別手段を高信頼資料で確定できなかった。

numericResetData:
  normalCeilingGames: NOT_APPLICABLE_NO_CEILING_CONFIRMED
  resetSpecificCeiling: NONE_CONFIRMED_AFTER_RESEARCH
  publishedResetModeDistribution: NONE_CONFIRMED_AFTER_RESEARCH
  publishedMorningHitRate: NONE_CONFIRMED_AFTER_RESEARCH
  publishedResetBenefitRate: NONE_CONFIRMED_AFTER_RESEARCH

resetBehaviorQA: PARTIAL_VERIFIED_WITH_EXTENSIVE_RESEARCH

## conflicts

1. releaseDate: 当時グリーンべると/HAZUSEの2010-02-07、複数DBの2010-02に対し、K-Naviのみ2009-02-08。発表記事が2010-01-15のためK-Navi値は `LIKELY_METADATA_ERROR` として非採用。
2. formalModelName: 当時グリーンべると `アフロノモンチS`、P-WORLD `アフロのモンチS`。表記差として双方保持。
3. REG max payout: 当時グリーンべると/P-WORLD `MAX116枚` vs 旧パチマガ `MAX104枚`。規定払い出し119枚は整合するが実獲得MAXの定義を解消できず `CONFLICT`。

## missingFields

- setting-change behavior beyond absence of published special reset benefit: UNVERIFIED_AFTER_RESEARCH
- power-cycle handling of active 5G mini-RT: UNVERIFIED_AFTER_RESEARCH
- resetDetection: UNVERIFIED_AFTER_RESEARCH
- reset-specific morning numeric data: NONE_CONFIRMED_AFTER_RESEARCH

## sources

取得日: 2026-09-03

1. グリーンべると / P-WORLD業界ニュース「スロースタートなど演出多彩！『アフロのモンチ』」 — https://news.p-world.co.jp/articles/3757/greenbelt — 2010-01-15発表、型式名アフロノモンチS、BIG MAX311枚、REG MAX116枚、5GプチRT、納品2/7開始 — reliability: INDUSTRY
2. HAZUSE DATA「アフロのモンチ」 — https://data.hazuse.com/?genre=208&machine_code=9S1003 — 導入開始2010-02-07、メーカー、検定番号系列、精密ボーナス確率 — reliability: ANALYSIS_DATABASE_HIGH
3. P-WORLD「アフロのモンチ」 — https://www.p-world.co.jp/machine/database/5829 — 型式名/検定番号、設定別BIG/REG/合算/機械割、BIG MAX311枚/REG MAX116枚、5GプチRT — reliability: INDUSTRY_DATABASE
4. K-Navi「アフロのモンチ」 — https://p-kn.com/slot/1136/ — 設定別BIG/REG/合算、技術介入、プチRT。導入日2009-02-08は他資料と1年競合 — reliability: ANALYSIS_DATABASE_WITH_DATE_ERROR
5. pacnk「アフロのモンチ」 — https://pacnk.com/slot/2010/afronomonchi/top.php — 2010年2月、設定別BIG/REG/機械割、演出用5G RT — reliability: ANALYSIS_DATABASE
6. 5号機クロニクル「SNKプレイモア 5号機全機種一覧」 — https://5goki.com/snkplaymore — 2010/2、機械割95.1〜112.5% — reliability: RETROSPECTIVE_DATABASE
7. パチマガスロマガ「アフロのモンチ」基本 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/snk_slot/28/a.php — ノーマル+5GプチRT、BIG MAX311枚、REG MAX104枚 — reliability: ANALYSIS_HIGH
8. パチマガスロマガ「アフロのモンチ」小役/1000円ゲーム数 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/snk_slot/28/c.php — 1000円あたり35.01〜37.08G — reliability: ANALYSIS_HIGH
9. パチマガスロマガ「アフロのモンチ」機種トップ — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/snk_slot/28/snk_slot_28.php — 「攻め時・ヤメ時→特にナシ」および旧解析ナビ — reliability: ANALYSIS_HIGH

## evidencePolicy

- 導入日は同時代業界記事＋HAZUSEの具体日一致を主根拠とし、月精度DBで補強。
- K-Naviの2009-02-08は2010-01-15発表記事と時系列矛盾するため誤記候補として分離。
- 機械割は独立3系統一致を主値化。
- 50枚ベースは旧パチマガの直接1000円値を使用し、小役確率から逆算しない。
- REG最大獲得枚数は複数ソースが競合するため平均・推定補正しない。
- resetBehaviorはノーマル機だからという一般論だけで断定せず、公開特殊挙動の再探索結果と、本機に持続ゲーム数天井/モード/ART等が確認されないことを分けて記録。
