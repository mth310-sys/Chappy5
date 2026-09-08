machineName: 沖ドキ！パラダイス
manufacturer: ユニバーサルブロス
releaseDate: 2016-06-27
recordNumber: 989
generation: 5号機
systemType: AT / 疑似ボーナス連続タイプ / 完全告知 / 25Φ
formalModelName: 沖ドキ！パラダイスHA
certificationNumber: 5S1348
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- ユニバーサル公式は「沖ドキ！パラダイス」を2016年6月発売、AT・5号機・ユニバーサルブロス製として掲載し、25Φ/30Φ同時デビューを明記。
- HAZUSEで25Φ側の型式名 `沖ドキ！パラダイスHA`、検定番号 `5S1348`、導入開始日2016-06-27、メーカー ユニバーサルブロスを確認。
- K-Navi、パチビー、ALL7でも2016-06-27導入を照合。
- 30Φ版はアクロス扱いの別バージョンとして次レコードで個別収集し、本レコードへ混同しない。
reliability: OFFICIAL_INDUSTRY_ANALYSIS_HIGH

## payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 96.7% |
| 2 | 99.4% |
| 3 | 101.5% |
| 4 | 104.1% |
| 5 | 107.1% |
| 6 | 110.2% |
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
| 設定 | BIG | REG | 合算 |
|---:|---:|---:|---:|
| 1 | 1/799.1 | 1/149.7 | 1/126.1 |
| 2 | 1/551.6 | 1/143.4 | 1/113.8 |
| 3 | 1/625.4 | 1/141.6 | 1/115.5 |
| 4 | 1/451.6 | 1/134.6 | 1/103.7 |
| 5 | 1/491.7 | 1/133.6 | 1/105.1 |
| 6 | 1/355.9 | 1/118.3 | 1/88.8 |
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- 設定1: **48.9G/50枚**
- 設定2: **49.0G/50枚**
- 設定3: **49.1G/50枚**
- 設定4: **49.2G/50枚**
- 設定5: **49.3G/50枚**
- 設定6: **49.4G/50枚**
- 比較用代表値: **約49G/50枚**。
reliability: ANALYSIS_HIGH

## netIncrease
- AT疑似ボーナス純増: **約3.0枚/G**。
- ユニバーサル公式も「最後の純増3.0枚」と明記。
reliability: OFFICIAL_ANALYSIS_HIGH

## basicPayout
- BIG: **40G / 約120枚**。
- REG: **10G / 約30枚**。
reliability: INDUSTRY_ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData
- 通常A / 通常B / 天国準備: 天井 **700G表記**。
- P-WORLD/パチビーは「ボーナス間最大699G消化でボーナス確定」と表記しており、実質同一到達点のカウント表現差として保持する。
- 引き戻し: 最大 **170G**。解析では71〜170Gに規定G数振り分け。
- 天国 / ドキドキ / 超ドキドキ / 保障: **32G**。
- BIG当選時は天国以上への移行が強く、シリーズの32G連チャン構造を継承。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_PUBLIC_MACRO_BEHAVIOR
resetQaLastUpdated: 2026-09-08

### settingChangeBehavior
- 設定変更時は **天井ゲーム数をリセット**。
- 内部モードは **再抽選**。
- 設定変更時のモード振り分けは全設定共通で公開されている。

### carryOverBehavior
- 据え置きでは前日の天井進捗・内部モードを **CARRYOVER** と扱う。
- 公開朝一表では「電源ON/OFF」が天井・モードとも引き継ぎで、設定変更しない据え置き運用と整合する。

### powerCycleBehavior
- 純電源OFF→ONのみ: **天井ゲーム数を引き継ぐ / 内部モードを引き継ぐ**。
- 設定変更とは明確に別挙動。

### gameCounterReset
- 設定変更: **RESET**。
- 据え置き / 純電源OFF→ON: **CARRYOVER**。

### ceilingAfterReset
- 設定変更で通常A/B/天国準備側へ再抽選された場合は通常最大700G。
- **33.59%で引き戻しモード**へ移行し、その場合の天井は最大170Gとなるため、確率的な朝一短縮恩恵がある。
- 固定の「リセット専用天井」ではなく、`PROBABILISTIC_RESET_SHORTENING_VIA_MODE_RESELECT` として扱う。

### modeAfterReset
設定変更時モード振り分け（全設定共通）:
| モード | 振り分け |
|---|---:|
| 通常A | 50.00% |
| 通常B | 15.23% |
| 天国準備 | 1.17% |
| 引き戻し | 33.59% |
- 一撃、当時解析、複数攻略資料で一致。
- 純電源OFF→ONでは前日モードを引き継ぐ。

### stateAfterReset
- 本機の朝一でホール経営/客AIに主要な長期状態は上記モード管理として記録。
- それ以外の細かな内部状態抽選は物差し用途外。

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 設定変更時の **33.59%で引き戻しモード**が主要朝一恩恵。
- 引き戻しモードでは通常A/Bより自力当選率が高く、最大170Gでボーナス到達。
- したがって朝一の早い初当たりを狙う根拠になるが、設定変更確定挙動ではない。

### resetPenalties
- 前日モードおよび天井進捗は設定変更で消去されるため、前日良モード/深いハマリを据え置き狙いする客には不利になり得る。
- それ以外の設定変更専用ペナルティ数値は **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection
- 複数の朝一解析では「朝一は基本的に設定変更を見抜くことは不可」とされる。
- 本機固有のガックン・初期出目・ランプ等による確定的な変更判別は、機種名/型式名/メーカー/設定変更/リセット/朝一/ガックン/変更判別を組み替えて再探索したが **NONE_CONFIRMED_AFTER_RESEARCH**。
- 170G以内の早い当選は引き戻し示唆になり得るが、設定変更確定材料にはしない。

### numericResetData
- 設定変更時モード: 通常A **50.00%** / 通常B **15.23%** / 天国準備 **1.17%** / 引き戻し **33.59%**。
- 引き戻しモード天井: **最大170G**。
- 引き戻し規定G数は解析資料で71〜170Gに振り分け。

## dataQualityNotes
- 公式でシリーズ、メーカー、AT、5号機、2016年6月、25Φ/30Φ同時展開を確認。
- 導入日、型式、検定番号、性能コアはHAZUSE/K-Navi/パチビー/P-WORLD/複数解析で照合。
- 天井「700G」と「699G消化で確定」はカウント表現差と判断し、平均化せず両表記を残す。
- resetBehaviorは当時の複数解析で設定変更/純電断の差とモード振り分けが一致。
- 30Φは同スペックでもメーカー/型式区分が異なるため独立レコード化する。

## sources
取得日: 2026-09-08

1. ユニバーサルエンターテインメント公式 — 沖ドキ！パラダイス
   - https://www.universal-777.com/product/slot/okidoki_paradise/
   - 5号機AT、ユニバーサルブロス、2016年6月発売、純増3.0枚、25Φ/30Φ同時展開。
   - reliability: OFFICIAL
2. HAZUSE — 沖ドキ！パラダイス
   - https://hazuse.com/machine/pachislot/5S1348/
   - 型式名 沖ドキ！パラダイスHA、検定番号5S1348、導入2016-06-27、設定別BIG/REG/合算。
   - reliability: ANALYSIS_HIGH
3. K-Navi — 沖ドキ！パラダイス(25φ)
   - https://p-kn.com/slot/2509/
   - ユニバーサルブロス、2016-06-27、BIG40G約120枚、REG10G約30枚。
   - reliability: ANALYSIS_HIGH
4. パチビー — 沖ドキ！パラダイス
   - https://www.pachibee.jp/machines/index/216060006
   - 2016-06-27、機械割、BIG/REG/合算、最大699G消化表記、純増3.0枚/G。
   - reliability: INDUSTRY_DATABASE
5. P-WORLD — 沖ドキ！パラダイス-25
   - https://www.p-world.co.jp/machine/database/8048
   - 5号機AT、純増3.0枚/G、40G/10G、最大699G消化で確定。
   - reliability: INDUSTRY_DATABASE
6. 一撃 — 沖ドキ！パラダイス モード移行抽選
   - https://1geki.jp/slot/s_oki_para/42/
   - 設定変更時モード振り分け 50.00/15.23/1.17/33.59%。
   - reliability: ANALYSIS_HIGH
7. ちょんぼりすた — 沖ドキ！パラダイス
   - https://chonborista.com/slot/universal-slot/20269/
   - 設定変更:天井RESET/モード再抽選、電源ON-OFF:天井/モード引継ぎ、リセット時33.6%引き戻し、引き戻し最大170G。
   - reliability: ANALYSIS_HIGH
8. スロ確.com — 沖ドキ！パラダイス
   - https://slotkaku.com/okidokiparadise
   - 25Φ/30Φメーカー区分、純増、設定別性能、48.9〜49.4G/50枚、天井、設定変更/電断、モード振り分け。
   - reliability: ANALYSIS_SINGLE
9. pachislo-data.com — 沖ドキ！パラダイス
   - https://pachislo-data.com/univa/24976
   - 設定変更/電断表、モード振り分け、約49G/50枚、性能コア。
   - reliability: PERIOD_ANALYSIS
10. ALL7 — 2016年6月導入予定一覧
   - https://www.all7.jp/plans/index/2016/06
   - 06/20群の次が06/27群、沖ドキ！パラダイス/同-30/南国物語SPECIALを掲載。
   - reliability: PERIOD_DATABASE

## missingFields
- 本機固有の確定的設定変更判別契約（十分再探索後も確認なし）

## conflicts
- `CEILING_COUNT_PRESENTATION_699_GAMES_CONSUMED_VS_700G_CEILING`: P-WORLD/パチビーは「最大699G消化で確定」、複数解析は「700G天井」。実質到達点の表現差として双方保持。
