# サンサンハナハナ-30

machineName: サンサンハナハナ-30
manufacturer: パイオニア
formalModelName: UNVERIFIED_AFTER_RESEARCH
inspectionNumber: UNVERIFIED_AFTER_RESEARCH
releaseDate: 2009-08-30（2009-07-31グリーンべるとが「8月30日から納品予定」。パイオニア公式製品一覧は2009年08月発売。具体的な全国ホール稼働開始日を別一次資料で確定できなかったため、時系列キューでは納品開始予定日を採用し定義を明記）
generation: 5号機
systemType: ノーマル / 完全告知 / 30Φ / BB+RB
coreStatus: COMPLETE_CORE_WITH_FORMAL_MODEL_AND_INSPECTION_UNVERIFIED_RELEASE_DATE_IS_DELIVERY_START

## payoutRateBySetting

メーカー発表値として当時パチマガスロマガに掲載。P-WORLDおよび後年ハナハナ資料とも一致。

| 設定 | 機械割 |
|---:|---:|
| 1 | 95% |
| 2 | 98% |
| 3 | 100% |
| 4 | 103% |
| 5 | 106% |
| 6 | 110% |

confidence: OLD_ANALYSIS_HIGH_AND_DATABASE_MULTI_SOURCE_MANUFACTURER_PUBLISHED_VALUES

## initialHitBySetting

当時パチマガスロマガ、P-WORLD、後年ハナハナ回顧資料で一致。2009年当時グリーンべると記事の設定1/6端点とも整合。

| 設定 | BIG | REG | ボーナス合算 |
|---:|---:|---:|---:|
| 1 | 1/306 | 1/496 | 1/189 |
| 2 | 1/296 | 1/468 | 1/181 |
| 3 | 1/282 | 1/442 | 1/172 |
| 4 | 1/268 | 1/412 | 1/162 |
| 5 | 1/256 | 1/385 | 1/153 |
| 6 | 1/244 | 1/364 | 1/146 |

confidence: OLD_ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- 約37G / 1000円（50枚貸し相当）
- 2009年当時グリーンべると記事の公表値。
- 設定別の直接比較可能なベース表は、`サンサンハナハナ30 / サンハナ / パイオニア` と `50枚 / 1000円 / ベース / コイン持ち / 小役確率` を組み替え、当時解析・P-WORLD・旧資料・回顧資料を再探索したが今回確定できず。単一の約37Gを全設定へ展開しない。

confidence: INDUSTRY_DIRECT_APPROXIMATE_COMMON_VALUE

## netIncrease

NOT_APPLICABLE

- ボーナスのみで出玉を増やす純正ノーマルタイプ。
- RT/ART/AT非搭載。

## basicPayout

- BIG: 平均約312枚（345枚を超える払い出しで終了）
- REG: 平均約130枚（135枚を超える払い出しで終了）

2009年当時グリーンべると、P-WORLDで一致。

confidence: INDUSTRY_AND_DATABASE_MULTI_SOURCE

## modeSpecificMinimumData

- 完全告知。ハイビスカス点灯でボーナス告知。
- P-WORLDは「ボーナスのみの仕様」と明記。
- RT/ART/AT/CZ、通常時ゲーム数天井、周期CZ、ゲーム数管理モード、朝一専用モードは本機固有資料で確認されない。
- ボーナス成立時の一部で告知を次ゲームへ持ち越すプレミアム演出は存在するが、長期モード管理ではない。
- ゲーム数天井/モード数値は `NOT_APPLICABLE_NO_PUBLISHED_CEILING_OR_GAME_COUNT_MODE_SYSTEM`。

## resetBehavior — v0.7

settingChangeBehavior: UNVERIFIED_AFTER_RESEARCH_FOR_MACHINE_SPECIFIC_HARDWARE_STARTUP。設定変更操作時のリール初期位置、ハイビスカス/サイドランプ、ガックン等の本機固有起動挙動を直接確認できる資料を確定できず。天井・RT/ART/AT/CZ・ゲーム数管理モード非搭載のため、それらをリセットする朝一恩恵は該当しない。

carryOverBehavior: NOT_APPLICABLE_FOR_CEILING_MODE_RT_ART_CZ / HARDWARE_DETAILS_UNVERIFIED。据え置きで引き継ぐ天井ゲーム数、ART/RTストック、周期CZ、ゲーム数管理モードは確認されない。実機完全再現にのみ必要な特殊成立中状態は本DBの比較対象外。表示/リール位置等の本機固有据え置き判別要素は未確認。

powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH。設定変更を伴わない単純電源OFF→ON時のリール初期位置、ハイビスカス/サイドランプ表示等を本機固有の直接資料で確定できず。

gameCounterReset: NOT_APPLICABLE_NO_CEILING_OR_GAME_COUNT_SYSTEM_CONFIRMED。天井・周期CZ・ゲーム数解除を確認できないため、朝一天井カウンタのreset/carry-over比較対象なし。

ceilingAfterReset: NOT_APPLICABLE_NO_CEILING_CONFIRMED。設定変更時の短縮天井/再抽選天井の公開値なし。

modeAfterReset: NOT_APPLICABLE_NO_GAME_COUNT_MODE_SYSTEM_CONFIRMED。通常/天国等のゲーム数管理モードや朝一専用モードは確認されない。

stateAfterReset: NOT_APPLICABLE_FOR_RT_ART_AT_CZ_STATE / OTHER_INTERNAL_START_STATE_UNVERIFIED。RT/ART/AT/CZ状態は非搭載。その他の本機固有内部初期状態は直接資料を確認できず、一般的なノーマル機挙動で推測補完しない。

advantageousSectionReset: NOT_APPLICABLE（5号機・有利区間制度前）

resetBenefits: NONE_CONFIRMED_AFTER_RESEARCH。設定変更時だけ適用される短縮天井、モード優遇、CZ/初当たり優遇等の公開朝一恩恵は確認できず。

resetPenalties: NONE_CONFIRMED_AFTER_RESEARCH。設定変更時だけ適用される主要な不利要素の公開情報は確認できず。

resetDetection: UNVERIFIED_AFTER_RESEARCH。本機固有のガックン、リール初期出目、ランプ状態等による設定変更/据え置き判別を直接確認できず。BIG/REG確率、BIG中スイカ、REG中サイドランプなど通常の設定推測要素はリセット判別とは分離する。

numericResetData:
  publishedMorningModeDistribution: NONE_CONFIRMED
  publishedResetHitRate: NONE_CONFIRMED
  shortenedCeiling: NOT_APPLICABLE_NO_CEILING_CONFIRMED
  resetBenefitRate: NONE_CONFIRMED
  resetSpecificCZInitialHit: NOT_APPLICABLE_NO_CZ

resetBehaviorQA: STRUCTURAL_NA_CONFIRMED_MACHINE_SPECIFIC_HARDWARE_POWER_RESET_DETAILS_UNVERIFIED_AFTER_RESEARCH

resetBehaviorResearchNote:
- `サンサンハナハナ-30 / サンサンハナハナ30 / サンハナ / パイオニア` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 電源 / 天井 / モード / 状態 / RT / ガックン / リール / 初期出目 / 設定変更判別` を組み替えて再探索。
- パイオニア公式製品一覧、2009年当時グリーンべると、P-WORLD、K-Navi、当時パチマガスロマガ、後年ハナハナ専門回顧、機種DBを横断。
- 6号機AT「スーパーハナハナ」等には設定変更/電断時の具体的な天井・モード情報があるが、本機は2009年5号機純正ノーマルであり別機種なので流用しない。
- 本機固有の設定変更/電断ハード挙動は直接確証なしのため `UNVERIFIED_AFTER_RESEARCH` を維持。

## sources

取得日: 2026-09-03

1. 株式会社パイオニア「パチスロ機種情報2001年~2009年」 — https://www.slot-pioneer.co.jp/products/2009.html — サンサンハナハナ-30、2009年08月発売、2009年モデル公式掲載 — reliability: OFFICIAL
2. グリーンべると / P-WORLD業界ニュース「『ハナハナ』シリーズ最新作を発表」2009-07-31 — https://news.p-world.co.jp/articles/3553/greenbelt — 8月30日納品予定、5号機ハナハナ第3弾、設定1/6のBIG/REG/合算/出玉率端点、BIG約312枚、REG約130枚、1000円約37G — reliability: INDUSTRY
3. P-WORLD「サンサンハナハナ30」 — https://www.p-world.co.jp/machine/database/5637 — 設定別BIG/REG/合算/機械割、平均312枚/130枚、ボーナスのみの仕様 — reliability: DATABASE_HIGH
4. パチマガスロマガ「サンサンハナハナ30 ボーナス抽選確率/PAYOUT」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/pioneer_slot/92/h.php — 設定別BIG/REG/合算、PAYOUTメーカー発表値95〜110% — reliability: OLD_ANALYSIS_HIGH
5. パチマガスロマガ「サンサンハナハナ30 ボーナス中の打ち方」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/pioneer_slot/92/e.php — ボーナス中手順、REG中サイドランプ設定推測要素 — reliability: OLD_ANALYSIS_HIGH
6. K-Navi「サンサンハナハナ-30 フリーズ演出に注目」 — https://p-kn.com/slot/1021/13000/ — ボーナス後1G成立時フリーズ、プレミア告知 — reliability: OLD_ANALYSIS_HIGH
7. ハナハナ専門回顧「スロット歴代機種『ハナハナ』シリーズのスペックや特徴全まとめ」 — https://hanahana-blog.com/hanahana-history — 設定別BIG/REG/合算/機械割の再照合 — reliability: RETROSPECTIVE_SPECIALIST

## missingFields

- formalModelName: UNVERIFIED_AFTER_RESEARCH
- inspectionNumber: UNVERIFIED_AFTER_RESEARCH
- exact nationwide hall operation start date distinct from delivery start: UNVERIFIED_AFTER_RESEARCH
- setting-specific baseGamesPer50: UNVERIFIED_AFTER_RESEARCH（共通目安約37G/1000円は確認）
- settingChange hardware/startup behavior: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- reset-specific gakkun / initial reel position / lamp detection: UNVERIFIED_AFTER_RESEARCH

## conflicts

- NONE_CONFIRMED_FOR_CORE_NUMERICS。設定別BIG/REG/合算/メーカー発表機械割は主要資料間で一致。
- releaseDate definition note: パイオニア公式は2009年08月発売、当時業界記事は2009-08-30納品予定。全国ホール稼働開始の別具体日を確定できないため、本レコードの2009-08-30は「納品開始予定日」として保持し、ホール導入日と断定しない。
