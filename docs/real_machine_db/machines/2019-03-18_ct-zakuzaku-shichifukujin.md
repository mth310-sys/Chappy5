# No.1271 CTザクザク七福神

- recordStatus: `COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7`
- machineName: CTザクザク七福神
- manufacturer: 山佐
- releaseDate: 2019-03-18
- generation: 6号機
- systemType: ノーマルA+CT / 技術介入
- formalModelNameCanonical: `SザクザクシチフクジンEE`
- certificationNumber: `8S0642`
- settings: `1 / 2 / 5 / 6`
- collectedAt: 2026-09-11

## performanceCore
### payoutRateBySetting / initialHitBySetting
| 設定 | BIG | REG | ボーナス合算 | 市場掲載機械割 | 完全攻略時 |
|---:|---:|---:|---:|---:|---:|
| 1 | 1/197.4 | 1/202.3 | 1/99.90 | 98.2% | 101.1% |
| 2 | 1/192.7 | 1/191.6 | 1/96.09 | 100.4% | 103.6% |
| 5 | 1/191.6 | 1/185.1 | 1/94.16 | 102.4% | 105.7% |
| 6 | 1/190.5 | 1/179.6 | 1/92.43 | 104.6% | 108.2% |

- パチマガスロマガ、HAZUSE、すろぱちくえすとで主要値が一致。
- ただし導入直後に「実戦上BIGが公表/解析表より重い」とする指摘が複数あり、一部サイトでは後にスペック数値を非掲載化した形跡がある。確定した代替理論値は固定できないため、上表は当時広く掲載された解析値として保存し、実戦乖離疑義をCONFLICT_NOTEとして分離する。

### baseGamesPer50
- **約39.0G/50枚**。
- すろぱちくえすと、みんスロ等で約39G表記。二次資料に39～43G相当の揺れもあるが、定義不明のためcanonicalは約39G。

### netIncrease / basicPayout
- CT純増: **約0.2枚/G（ほぼ現状維持）**。
- BIG: **最大150枚**（216枚超の払い出しで終了）。
- REG: **約40枚**（54枚超の払い出しで終了）。
- BIG後CT突入期待度: **50%以上**。
- CT中ボーナス後: **CT再突入濃厚/解析上100%扱い**。
- ボーナス+CTループ率: **約63.4%**。
- CT: **最低77G～最大100G**。保証区間→維持区間、ご褒美タイム23Gを含む。

## modeSpecificMinimumData
- 通常ゲーム数天井: **非搭載**。
- 規定Gゾーン: **非搭載**。
- CT終了条件はベル入賞管理と規定G数で、技術介入により最大100G継続を目指す。
- 細かな小役・CT内部抽選は実機完全再現用のため収集対象外。

## resetBehavior
### settingChangeBehavior
- **CT: RESET**。
- **有利区間ランプ: 消灯**。
- 天井/通常G数管理はN/A。
- HAZUSEの本機固有「設定変更&電源ON・OFF時」表で直接確認。

### carryOverBehavior
- 据え置きは、設定変更を行わない通常営業運用ではCT・有利区間状態が継続する方向で純電断資料と整合する。
- ただし「据え置き」を純電源OFF→ONから独立条件として全内部状態まで列挙した本機固有公開表は固定できず、`PARTIAL_CROSSCHECKED_WITH_POWER_CYCLE`。

### powerCycleBehavior
- 純電源OFF→ON:
  - **CT: CARRY_OVER**。
  - **有利区間ランプ: CARRY_OVER**。
- 設定変更との差をHAZUSE本機固有表で直接確認。

### gameCounterReset
- `NOT_APPLICABLE`。
- 通常ゲーム数天井・ゾーン非搭載。

### ceilingAfterReset
- `NOT_APPLICABLE`。
- 通常天井自体が非搭載で、設定変更後短縮天井もなし。

### modeAfterReset
- 通常時の朝一専用モード、設定変更専用モード振り分けは `NONE_CONFIRMED_AFTER_RESEARCH`。
- CT状態そのものは設定変更でRESET、純電断でCARRY_OVER。

### stateAfterReset
- CT: **RESET**。
- CT以外の本機固有内部状態について、設定変更/据え置き/純電断を分離した追加契約は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

### advantageousSectionReset
- 設定変更時: **有利区間ランプ消灯**。
- 純電源OFF→ON: **有利区間ランプ引継ぎ**。
- 朝一ランプ点灯は前日状態継続を示唆する主要判別材料となる。

### resetBenefits
- 天井短縮・朝一CZ/ボーナス当選率上昇等の設定変更専用出玉恩恵は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 設定変更により前日CT状態は消失するため、CT残存は引き継げない。

### resetPenalties
- 前日CT中/CT状態が残っていても設定変更でRESETされる。
- 数値化された設定変更専用ペナルティ率は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- **有利区間ランプ**（「貯留」セグ右下ドット）が朝一点灯していれば、設定変更ではなく前日状態引継ぎの有力材料。
- CT状態が朝一残っている場合も設定変更否定方向の材料。
- 本機固有ガックン発生条件・発生率は、機種名/型式/山佐/設定変更/リセット/据え置き/電源OFF ON/ガックン等へ検索語を変えたが固定できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

### numericResetData
- normalCeiling: `NOT_APPLICABLE`
- resetCeiling: `NOT_APPLICABLE`
- ceilingShortening: `NOT_APPLICABLE`
- resetModeDistribution: `NONE_CONFIRMED_AFTER_RESEARCH`
- resetBonusBoost: `NONE_CONFIRMED_AFTER_RESEARCH`
- gakkunRate: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`

## releaseDate / formalModel
- 2019-03-18導入はHAZUSE、K-Navi、すろぱちくえすと、モゲスロで一致。
- 型式 `SザクザクシチフクジンEE`、検定番号 `8S0642` はHAZUSEで直接確認。
- 山佐が2019-01-21に発表、2019年3月中旬導入予定とする当時業界記事とも整合。

## missingFields
- 本機固有ガックン発生条件・発生率。
- 据え置きを純電断から独立させたCT以外の全内部状態契約。
- 設定変更専用の朝一モード振り分け/当選優遇数値（存在を確認できず）。

## conflicts / qualityNotes
- `CONFLICT_NOTE_ADVERTISED_ANALYSIS_BIG_RATE_VS_EARLY_FIELD_OBSERVATION`
  - 当時広く掲載されたBIG確率は1/197.4～1/190.5。
  - 導入直後、実戦集計でBIGが約1/240近辺とする指摘や、一部大手解析サイトがスペック表を非掲載化したとの当時記録がある。
  - 検定仕様として代替の確定BIG値を高信頼で固定できないため、実戦値を理論値に置換せず、上表は複数解析一致値として保持し疑義を注記する。
- `BASE_MINOR_SOURCE_VARIANCE_APPROX_39_VS_39_TO_43_SECONDARY`
  - 高一致資料は約39G/50枚。39～43G表記の二次資料もあるが定義差が不明なためcanonicalは約39G。

## sources
取得日: 2026-09-11
1. HAZUSE — https://hazuse.com/machine/pachislot/8S0642/ — 導入日、メーカー、型式、検定番号、設定別BIG/REG、天井非搭載、設定変更/電源ON-OFF時のCT・有利区間ランプ — reliability: `ANALYSIS_HIGH_MACHINE_DB`
2. パチマガスロマガ ボーナス確率 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/231/h-1.php — 設定別BIG/REG/合算、市場掲載PAYOUT、完全攻略時 — reliability: `ANALYSIS_HIGH`
3. パチマガスロマガ 機種概要 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/231/a.php — BIG最大150枚、REG約40枚、CT最大100G、BIG後50%以上 — reliability: `ANALYSIS_HIGH`
4. パチマガスロマガ CT — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/231/02.php — CT構造、77G+ご褒美23G、CT中ボーナス後再突入 — reliability: `ANALYSIS_HIGH`
5. すろぱちくえすと — https://www.slopachi-quest.com/article/ct-shichihukujinn/ — 2019-03-18、約39G/50枚、純増約0.2枚、天井非搭載、設定別性能 — reliability: `CONTEMPORARY_ANALYSIS`
6. K-Navi — https://p-kn.com/slot/3181/ — 2019-03-18、BIG最大150枚、REG約40枚、CT/ループ仕様 — reliability: `MACHINE_DB_HIGH`
7. グリーンべると / P-WORLD業界ニュース — https://news.p-world.co.jp/articles/10721/greenbelt — 2019-01-25記事、山佐発表、6号機初CT、BIG後50%、ループ約63.4% — reliability: `INDUSTRY`
8. 長崎県遊技業協同組合（遊技通信web転載） — https://nagasaki-yukyo.or.jp/information/%E5%B1%B1%E4%BD%90%E3%80%816%E5%8F%B7%E6%A9%9F%E7%89%88%E3%81%AEct%E6%A9%9F%E8%83%BD%E3%82%92%E6%90%AD%E8%BC%89%E3%81%97%E3%81%9F%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD%E6%96%B0%E6%A9%9F%E7%A8%AE/ — 2019-02-13、3月中旬導入予定、合算約1/99、63.4%、150/40枚 — reliability: `INDUSTRY_REPRINT`
9. ちょんぼりすた — https://chonborista.com/slot/yamasa-slot/75845/comment-page-2/ — 設定別性能、導入直後BIG実戦乖離疑義 — reliability: `ANALYSIS_HIGH_WITH_FIELD_NOTE`
10. モゲスロ2019新台カレンダー — https://moge-site.com/new-slot2019 — 3/4→3/18 CTザクザク→3/25ドンちゃん2の時系列監査 — reliability: `CONTEMPORARY_SCHEDULE_DB`
11. slotexpectation — https://slotexpectation.com/archives/13781/ — 朝一リセット挙動CT RESET/電断引継ぎの後年整理 — reliability: `SECONDARY_CROSSCHECK`

## confidence
- releaseDate/formalModel/certification: `ANALYSIS_HIGH_MACHINE_DB_PLUS_CROSSCHECK`
- performanceCore: `ANALYSIS_HIGH_CROSSCHECKED_WITH_FIELD_CONFLICT_NOTE`
- resetBehaviorCore: `ANALYSIS_HIGH_DIRECT_TABLE_PLUS_SECONDARY_CROSSCHECK`
- advantageousSectionReset: `ANALYSIS_HIGH_DIRECT_TABLE`
- resetDetection: `PARTIAL_RESEARCH_EXHAUSTED`
