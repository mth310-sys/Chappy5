# パチスロ TIGER & BUNNY

recordNo: 1304
machineName: パチスロ TIGER & BUNNY
machineNameVariants: タイガー＆バニー / タイバニ / パチスロTIGER&BUNNY
manufacturer: 山佐
formalModel: Sパチスロタイガー＆バニーHZ
certificationNumber: 9S0603
releaseDate: 2019-09-02
generation: 6号機
systemType: AT / 擬似ボーナス連動・純増変動型AT

## payoutRateBySetting

| 設定 | 出玉率 |
|---|---:|
| 1 | 97.9% |
| 2 | 99.2% |
| 3 | 101.1% |
| 4 | 103.5% |
| 5 | 106.5% |
| 6 | 110.2% |

パチ7、おスロおパチおいでやす、複数解析で一致。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

| 設定 | 擬似ボーナス合算 | AT初当たり |
|---|---:|---:|
| 1 | 1/229.8 | 1/684.7 |
| 2 | 1/220.1 | 1/621.0 |
| 3 | 1/203.7 | 1/502.5 |
| 4 | 1/189.7 | 1/448.4 |
| 5 | 1/170.3 | 1/368.7 |
| 6 | 1/157.7 | 1/331.5 |

複数当時解析で一致。

信頼度: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

設定別パチ7値:
- 設定1: 50.5G
- 設定2: 50.5G
- 設定3: 50.5G
- 設定4: 50.7G
- 設定5: 51.0G
- 設定6: 51.5G

別解析の代表表記は約50G/50枚。比較時は設定別値を優先し、概数と平均化しない。

## netIncrease

- AT「グッドラックタイム」はナビレベルにより純増が変動し、約1.0 / 2.0 / 4.0枚/G。
- 山佐公式は最高純増約4.0枚/G、最高擬似ボーナス確率約1/13と説明。

信頼度: OFFICIAL + ANALYSIS_HIGH

## basicPayout

- BIG BONUS: 平均約126枚、純増約4.0枚/G、AT期待度約36%。
- BLUE ROSE LIVE: 平均約150枚、純増約4.0枚/G、AT期待度約66%。
- REG BONUS: 平均約53枚、純増約4.0枚/G、AT期待度約12%。
- EPISODE BONUS: 平均約103枚、純増約4.0枚/G、AT確定。
- AT「グッドラックタイム」: 1セット30G+α、純増1 / 2 / 4枚/Gの変動型。擬似ボーナス当選時に残りG数を30Gへ再セットする。

完全再現用の各ボーナス振り分け・AT内詳細抽選は収録しない。

## modeSpecificMinimumData

- 通常時天井: 111G / 333G / 666Gの振り分けがあり、最深666G+αでBIG以上当選。
- 公開されている設定別天井振り分けは通常時性能として存在するが、設定変更専用振り分けとは断定せず朝一専用値には転用しない。
- 6号機有利区間管理機。

## resetBehavior

resetBehaviorVersion: v0.7
resetBehaviorQA: COMPLETE_PUBLIC_RESET_CORE_WITH_MODE_GAP
resetQaLastUpdated: 2026-09-11

### settingChangeBehavior

- 機種固有当時解析で **天井RESET / 内部状態RESET / 有利区間RESET**。
- 朝一ステージは虎徹の部屋 or 市街。
- 通常時有利区間ランプは常時消灯型。
- 設定変更時の内部モードについて、2019年版の直接契約は十分な再探索後も `UNVERIFIED_AFTER_RESEARCH`。

### carryOverBehavior

- 機種固有当時解析で、設定変更なしの電源OFF→ONでは **天井 / 内部状態 / 有利区間を引き継ぐ**。
- 据え置き時の内部モード独立契約は `UNVERIFIED_AFTER_RESEARCH`。

### powerCycleBehavior

- 電源OFF→ONのみ: **天井CARRY_OVER / 内部状態CARRY_OVER / 有利区間CARRY_OVER**。
- ステージは虎徹の部屋 or 市街。
- 内部モードは2019年版機種固有の直接対照表を固定できず、2022年SP資料から推定しない。

### gameCounterReset

- 設定変更: RESET。
- 純電源OFF→ON / 据え置き: CARRY_OVER。

### ceilingAfterReset

- 設定変更後も通常時最大666G+α。
- 設定変更専用の短縮天井は `NONE_CONFIRMED_AFTER_RESEARCH`。

### modeAfterReset

- 2019年版機種固有資料で設定変更時 / 純電断時の内部モード契約を直接固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 111G / 333G / 666Gの天井振り分けは公開されているが、設定変更専用モード振り分けではないため朝一値として流用しない。

### stateAfterReset

- 設定変更: RESET。
- 純電源OFF→ON / 据え置き: CARRY_OVER。
- 2019年版の機種固有資料で直接確認。

### advantageousSectionReset

- 設定変更: RESET。
- 電源OFF→ON: CARRY_OVER。
- 通常時は有利区間ランプが常に消灯するタイプのため、朝一ランプ単独では設定変更/据え置き判別不可。

### resetBenefits

- 設定変更専用の天井短縮、朝一高確、専用モード優遇率などは `NONE_CONFIRMED_AFTER_RESEARCH`。
- 有利区間RESET自体は確認できるが、公開された朝一専用数値恩恵は固定できない。

### resetPenalties

- 設定変更専用の主要不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection

- 通常時有利区間ランプ常時消灯のため、ランプによる変更判別は不可。
- 本機固有のガックン発生条件 / 発生率 / 確定性は表記揺れ・型式名まで変えて再探索しても `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 朝一のステージは虎徹の部屋 or 市街で、単独の確定判別材料とは扱わない。

### numericResetData / publicMorningNumbers

- 設定変更専用モード振り分け、朝一特定G以内当選率、リセット恩恵発生率の比較可能な公開確定値は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 通常時の設定別111 / 333 / 666G天井振り分けは公開されているが、朝一リセット専用値とは断定できないためここには転記しない。

### resetBehavior 再探索メモ

「パチスロ TIGER & BUNNY / タイガー＆バニー / タイバニ / Sパチスロタイガー＆バニーHZ / 山佐」に「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / モード / 内部状態 / 有利区間 / 有利区間ランプ / ガックン」を組み合わせて再探索。山佐公式、HAZUSE、パチ7、おスロおパチおいでやす、スロパチネット、すろぱちくえすと、モゲスロ、ちょんぼりすた、後継SP資料まで横断した。

2019年版では天井・内部状態・有利区間のRESET/CARRY_OVERを機種固有当時資料で固定。一方、検索で多く出る2022年 `TIGER & BUNNY SP` は別型式・別性能で、内部モードRESET表を2019年版へ転記しない。ガックンや朝一専用数値も固定できず、十分な再探索後のみ未確認とした。

## qualityNotes / conflicts

- 山佐公式で6号機AT、2019年9月稼働、最高ボーナス確率約1/13、最高純増約4.0枚/Gを確認。
- HAZUSEで正式型式 `Sパチスロタイガー＆バニーHZ`、検定番号 `9S0603`、2019-09-02導入を確認。
- パチ7・複数解析で設定別初当たり / 出玉率 / ベースを照合。
- `パチスロ TIGER & BUNNY SP`（2022年）は別機種。検索結果に混在しやすいため性能・resetBehaviorを混同しない。
- 導入台数は資料に約5,000台 / 約10,000台の差があるが市場実績は今回の必須収集外のためcanonical化しない。

## sources

取得日: 2026-09-11

1. 山佐ネクスト公式 — パチスロ TIGER & BUNNY
   - https://yamasa-next.co.jp/model_tab/
   - 6号機AT、2019年9月稼働、最高ボーナス確率約1/13、最高純増約4.0枚/G。
   - reliability: OFFICIAL
2. HAZUSE — パチスロ TIGER＆BUNNY
   - https://hazuse.com/machine/pachislot/9S0603/
   - 型式 `Sパチスロタイガー＆バニーHZ`、検定番号 `9S0603`、2019-09-02導入、純増約1.0〜4.0枚/G。
   - reliability: ANALYSIS_HIGH / DATABASE
3. パチ7 — スペック
   - https://pachiseven.jp/machines/5834/cutout/3
   - 2019-09-02、設定別擬似ボーナス/AT初当たり/出玉率、設定別50枚ベース、666G+α天井。
   - reliability: ANALYSIS_HIGH
4. おスロおパチおいでやす — 天井 / 朝一リセット
   - https://oslo-opachi.com/2019/09/02/tigerandbunny-tennjou/
   - 設定変更: 天井/有利区間RESET、電源OFF→ON: 天井/有利区間CARRY_OVER、通常時ランプ常時消灯、朝一ステージ。
   - reliability: ANALYSIS_HIGH
5. スロパチネット — タイガー＆バニー
   - https://slopachi-net.com/tiger-bunny
   - 2019年版の型式、性能、天井、設定変更時の天井/内部状態RESET、電断時引継ぎ、各疑似ボーナス平均枚数、AT1セット30G+α。
   - reliability: ANALYSIS_HIGH
6. すろぱちくえすと — 天井解析 / 朝一
   - https://www.slopachi-quest.com/article/tiger-and-bunny-tennjou/
   - 2019-09-02導入、天井振り分け、状態関連、朝一挙動を再照合。
   - reliability: ANALYSIS_HIGH
7. モゲスロ — TIGER&BUNNYまとめ
   - https://moge-site.com/archives/23753
   - 2019-09-02、6号機AT、設定別AT初当たり/ボーナス合算。
   - reliability: ANALYSIS_HIGH
8. 遊技通信 / P-WORLD業界ニュース
   - https://news.p-world.co.jp/articles/11434/yugitsushin
   - 山佐新機種、AT純増と擬似ボーナス確率変動、最高約1/13・最高純増約4.0枚、9月上旬導入予定。
   - reliability: INDUSTRY

## missingFields

- 2019 model setting-change/power-cycle internal mode direct contract: UNVERIFIED_AFTER_RESEARCH
- machine-specific gakkun probability/condition: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- public numeric morning reset benefit: NONE_CONFIRMED_AFTER_RESEARCH

## conflicts

- No material core numeric conflict confirmed after cross-source check.
- Search contamination risk: 2022 `TIGER & BUNNY SP` has detailed reset tables but is a separate model and is explicitly excluded from canonical 2019 reset fields.

coreStatus: COMPLETE_CORE
resetBehaviorQA: COMPLETE_PUBLIC_RESET_CORE_WITH_MODE_GAP
