# No.1155 SLOTデビルマンχ

- recordStatus: `COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7`
- machineName: SLOTデビルマンχ
- aliases: `SLOTデビルマンX`, `デビルマンχ`, `デビルマンX`, `デビルマンカイ`
- manufacturer: エレコ
- releaseDateCanonical: 2017-09-04
- releaseDateConflict: `CONFLICT_RELEASE_DATE_2017_09_04_VS_2017_09_19`
- generation: 5号機
- systemType: A+ART
- formalModelName: `SLOTデビルマンχDA`
- certificationNumber: `7S0565`
- collectedAt: 2026-09-10

## releaseDateEvidence
- HAZUSE: 2017-09-04
- パチビー: 2017-09-04
- K-Navi: 2017-09-19
- ちょんぼりすた: 2017-09-19
- すろかい: 2017-09-19
- slotnews777 2017年度新台カレンダー: 2017-09-19
- 平均・中間化は行わず `CONFLICT_RELEASE_DATE_2017_09_04_VS_2017_09_19` として両系統を保持。chronological canonicalは、型式・検定番号まで一体管理しているHAZUSEとパチビーが一致する2017-09-04を採用。

## performanceCore

### payoutRateBySetting
- setting1: 98.4%
- setting2: 99.0%
- setting3: 101.0%
- setting4: 104.1%
- setting5: 109.0%
- setting6: 115.2%

### bonusCombinedBySetting
- setting1: 1/299.3
- setting2: 1/299.3
- setting3: 1/284.9
- setting4: 1/284.9
- setting5: 1/265.3
- setting6: 1/265.3

### artInitialHitBySetting
- setting1: 1/566.2
- setting2: 1/554.0
- setting3: 1/542.4
- setting4: 1/486.2
- setting5: 1/509.1
- setting6: 1/387.3

### premiumBonus
- アモンボーナス: 1/16384.0（全設定共通）

### baseGamesPer50
- 約32.6〜32.9G/50枚

### netIncrease
- ART「アーマゲドン」: 約1.4枚/G
- ボーナス込み: 約2.0枚/G
- 定義差を混同せず別項目として保持。

### basicPayout
- デビルボーナス: 210枚
- アモンボーナス: 210枚
- ART「アーマゲドン」: 1セット50G、セットストック型
- 無限ART「妖鳥襲来」: 次回ボーナスまで継続

### ceiling
- ART終了後、ボーナス間1280G消化で前兆を経由しART当選。
- 消化G数はボーナスフラグ間を除くとする資料あり。

## modeSpecificMinimumData
- 通常時はモードA / モードBが存在。
- モードBからART当選時は無限ART「妖鳥襲来」突入率が優遇。
- 特殊高確「魔界状態」は10G継続し、滞在中のボーナスでART濃厚。
- 実機完全再現用の小役別内部抽選詳細は対象外として未収集。

## resetBehavior

### settingChangeBehavior
- 天井までのゲーム数: RESET。
- 内部状態: RESELECT。
- 開始ステージ: 街 or 学校。

### carryOverBehavior
- 独立した「設定据え置き」の直接比較表は見つからなかったため、純電源OFF→ONと勝手に同義化せず `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。

### powerCycleBehavior
- 純電源OFF→ON時、天井ゲーム数: CARRYOVER。
- 内部状態: CARRYOVER。
- 通常時の開始ステージ: 街 or 学校。
- ボーナス/ART中に電源OFF→ONした場合は当該状態を引き継ぐ。

### gameCounterReset
- 設定変更: RESET。
- 電源OFF→ONのみ: CARRYOVER。

### ceilingAfterReset
- 設定変更で1280G天井をゼロから再計数。
- 設定変更専用の777G等の短縮天井は、複数検索語・当時解析を再探索しても確認できず `NONE_CONFIRMED_AFTER_RESEARCH`。

### modeAfterReset
- 設定変更時は内部状態再抽選。
- モードA/Bの設定変更専用初期振り分け数値は十分な再探索後も直接固定できず `UNVERIFIED_AFTER_RESEARCH`。

### stateAfterReset
- 設定変更: RESELECT。
- 純電源OFF→ON: CARRYOVER。
- 設定変更時の通常/高確/魔界等の具体的初期振り分けは `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset
- `NOT_APPLICABLE_5TH_GEN_PRE_5_9`

### resetBenefits
- 朝一専用の天井短縮や専用高確移行率は確認されず `NONE_CONFIRMED_AFTER_RESEARCH`。
- 一方、設定変更後の最初のデビルボーナスには設定変更示唆ボイス「デビルマンの力を教えてやる」の専用振り分けが存在するため、変更判別契約として別管理。

### resetPenalties
- 公開情報上、設定変更固有の明確な朝一不利は確認できず `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- デビルボーナス中、逆押しで左リールに「赤7・チェリー・赤7」を3回停止させると設定示唆ボイスが発生。
- 「デビルマンの力を教えてやる」は設定変更示唆。
- 設定変更後1回目デビルボーナス時、このボイス振り分けは設定1〜3で20.0%、設定4で27.4%、設定5で29.0%、設定6で30.5%。
- 設定変更後2回目以降は当該ボイスが発生しない掲載値となっており、朝一初回ボーナスでの変更判別材料として有効。ただし単独では設定変更確定とは扱わない。
- 本機固有の確定ガックン・初期出目・ランプ判別は検索語を変えて再探索したが直接固定できず `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData
- setting-change-indication voice at first Devil Bonus:
  - setting1: 20.0%
  - setting2: 20.0%
  - setting3: 20.0%
  - setting4: 27.4%
  - setting5: 29.0%
  - setting6: 30.5%

## conflicts
- `CONFLICT_RELEASE_DATE_2017_09_04_VS_2017_09_19`
  - 2017-09-04: HAZUSE, パチビー
  - 2017-09-19: K-Navi, ちょんぼりすた, すろかい, slotnews777カレンダー
  - canonical: 2017-09-04
- 性能コア主要値はHAZUSE・すろかい・P-WORLD・業界記事間で大きな競合なし。

## sources
取得日: 2026-09-10

1. HAZUSE — SLOTデビルマンχ
   - https://hazuse.com/machine/pachislot/7S0565/
   - 型式`SLOTデビルマンχDA`、検定番号`7S0565`、エレコ、導入2017-09-04、設定別ボーナス/ART/機械割、1280G天井、通常モード、設定変更示唆ボイス数値。
   - confidence: `ANALYSIS_HIGH`

2. パチ＆スロ必勝本 — 天井&設定変更[SLOTデビルマンχ]
   - https://p.hisshobon.jp/machine/3047/1/66209
   - 設定変更時: 天井RESET / 状態RESELECT / 街or学校。電源OFF→ON: 天井・状態CARRYOVER、ステージ契約。
   - confidence: `ANALYSIS_HIGH`

3. パチビー — SLOTデビルマンχ
   - https://www.pachibee.jp/machines/index/217080024
   - 導入2017-09-04、ART1.4枚/G、ボーナス込み2.0枚/G、210枚、50G、1280G天井。
   - confidence: `INDUSTRY`

4. K-Navi — SLOTデビルマンχ
   - https://p-kn.com/slot/2881/
   - 導入2017-09-19、エレコ、210枚、ゲーム性。
   - confidence: `ANALYSIS_HIGH`

5. ちょんぼりすた — デビルマンχ
   - https://chonborista.com/slot/universal-slot/45302/
   - 導入2017-09-19、1280G天井、朝一比較の当時掲載履歴、設定変更示唆ボイス。
   - confidence: `ANALYSIS_HIGH`

6. スロット解析情報~すろかい~ — SLOTデビルマンχ 解析情報
   - https://slotkaiseki.hatenablog.com/entry/2017/08/16/153259
   - 導入2017-09-19、約32.6〜32.9G/50枚、設定別主要スペック。
   - confidence: `ANALYSIS_SINGLE`

7. P-WORLD — SLOTデビルマンΧ
   - https://www.p-world.co.jp/machine/database/8489
   - ART約1.4枚/G、ボーナス込み約2.0枚/G、210枚、50G、1280G天井、通常ステージ。
   - confidence: `INDUSTRY`

8. グリーンべると — ボーナスとARTのループが抜群の瞬発力を生む
   - https://web-greenbelt.jp/00009901/
   - 2017-09-19業界記事、エレコ製、ボーナス合成・ART初当たりレンジ、210枚、A+ART。
   - confidence: `INDUSTRY_HIGH`

9. 遊技日本 — ART突入時の期待値は850枚オーバー／「SLOTデビルマンχ（カイ）」
   - https://yugi-nippon.com/pachinko-new-machine/post-14308/
   - 2017-08-10発表記事、エレコ製、210枚、ART約1.4枚/G・50G、9月導入予定。
   - confidence: `INDUSTRY_HIGH`

10. slotnews777 — 2017年度新台カレンダー
   - https://slotnews777.blog.fc2.com/blog-entry-3121.html
   - 導入2017-09-19表記、エレコ、A+ART。
   - confidence: `CALENDAR_SECONDARY`

## missingFields
- carryOverBehaviorAsDistinctNoPowerCycleCondition: `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`
- resetInitialModeDistribution: `UNVERIFIED_AFTER_RESEARCH`
- resetInitialStateDistribution: `UNVERIFIED_AFTER_RESEARCH`
- resetDetectionGakkun: `UNVERIFIED_AFTER_RESEARCH`

## researchNotes
- χ（カイ）は検索・DB上で`X`表記される例があるため、χ/X/カイ/型式`DA`を横断検索した。
- 9/19導入カレンダー監査から発見したが、9/4資料も複数存在するため「遡及漏れ」としてNo.1155で追加。chronologicalFrontierは2017-09-19のまま。
- ちょんぼりすたの朝一表は当時「調査中」のままだったが、必勝本の機種別「天井&設定変更」で設定変更/電源OFF→ONの直接比較契約を確保できたため、最初の未検証結果で止めず更新した。
