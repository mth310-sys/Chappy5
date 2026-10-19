machineName: パチスロ ルパン三世～消されたルパン～
manufacturer: オリンピア
releaseDate: 2016-08-01
recordNumber: 999
generation: 5号機 / 5.5号機期
systemType: ART / 擬似ボーナス+ART
formalModelName: ルパン三世消されたルパン/B4
certificationNumber: UNVERIFIED_AFTER_RESEARCH
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_PARTIAL_IDENTITY

## identity
- K-Naviはホール導入開始を2016-08-01と明記。
- 2016年当時の新台解析資料も8月1日・約25,000台導入予定と記録しており、具体日が一致するため2016-08-01をcanonicalとする。
- 型式名は中古実機資料・後年回顧資料で `ルパン三世消されたルパン/B4` を複数確認。
- 一部中古DBには導入時期2016年7月という月次表記があるが、具体日付き当時資料を優先する。
- 検定番号は `ルパン三世消されたルパン/B4 / オリンピア / 6S / 検定 / 型式` 等へ表記・検索語・資料系統を変えて再探索したが、直接固定できる資料を今回確保できず `UNVERIFIED_AFTER_RESEARCH`。
reliability: INDUSTRY_ANALYSIS_HIGH_MULTI_SOURCE_WITH_CERTIFICATION_UNVERIFIED

## payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 96.6% |
| 2 | 97.6% |
| 3 | 100.4% |
| 4 | 102.4% |
| 5 | 105.4% |
| 6 | 110.8% |
- 複数解析資料で一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
### ART「ゴールデンタイム」初当たり
| 設定 | ART初当たり |
|---:|---:|
| 1 | 1/350.6 |
| 2 | 1/335.4 |
| 3 | 1/347.9 |
| 4 | 1/304.2 |
| 5 | 1/330.0 |
| 6 | 1/282.0 |
- 偶数設定・高設定が概ね優遇されるが単調増加ではない。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- 設定差込みの掲載レンジ: **約46.1～48.7G/50枚**。
- 当時の簡易スペック資料には「約46G」表記もあるため、約46Gは丸め代表値として分離する。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- 擬似ボーナス / ART「ゴールデンタイム」: **約2.0枚/G**。
reliability: INDUSTRY_ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout
- ルパンボーナス: **35G継続**、ART突入期待度約50%。純増約2.0枚/Gなので固定獲得枚数ではなくゲーム数型の擬似ボーナスとして扱う。
- 雷雲モード: **20G継続**、ART突入期待度約20%。ゲーム数天井は雷雲モードではリセットされないと当時解析に記録。
- ART「ゴールデンタイム」: **1セット約40G**、純増約2.0枚/G、継続率70～100%（平均約80%表記）。
reliability: INDUSTRY_ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData
- ゲーム数天井: ルパンボーナス/ART間 **499G or 999G**。到達でルパンボーナス。
- 499G仮天井選択率は設定差あり:
  - 設定1: 0.8% / 設定2: 1.6% / 設定3: 3.1% / 設定4: 4.7% / 設定5: 9.4% / 設定6: 12.5%。
  - 残りは999G（99.2 / 98.4 / 96.9 / 95.3 / 90.6 / 87.5%）。
- CZ「ウォンテッドチャンス」周期天井: **最大480G**。
- 雷雲カウンター: **100pt**到達時に雷雲モード突入抽選が高確率で行われる。
- 雷雲モード当選ではゲーム数天井をリセットしないため、ホールデータカウンターと内部/液晶ゲーム数がズレる場合がある。
- 完全再現用のCZ内部抽選・通常時全テーブルは収集対象外。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_PUBLIC_MACRO_BEHAVIOR_WITH_STATE_PARTIAL
resetQaLastUpdated: 2026-09-08

### settingChangeBehavior
- 設定変更時は **ゲーム数天井RESET**。
- ウォンテッドチャンスの周期ゲーム数も **RESET / 再選択**。
- カウンター系は設定変更でRESETとする後続解析資料あり。
- 一撃の2016-10-12時点ページでは天井/モード/状態/液晶ステージが「現在調査中」だったため、当時の情報成熟差を注記し、後続解析で明示されたマクロ挙動を採用。

### carryOverBehavior
- 据え置き営業跨ぎは **天井ゲーム数CARRYOVER / カウンターCARRYOVER** とする解析比較表を確認。
- 据え置き時の内部状態そのものについて、設定変更との直接比較で固定できる詳細資料は十分な再探索後も未確定のため `UNVERIFIED_AFTER_RESEARCH`。

### powerCycleBehavior
- 純電源OFF→ON（据え置き）は **天井ゲーム数CARRYOVER**。
- カウンター内部値も **CARRYOVER**。ただし朝一液晶表示は0ptになるとの解析表記があり、表示値と内部値を混同しない。
- ステージは設定変更/電源OFF→ONともランダムとする後続解析表があり、ステージ単独では変更判別不可。
- 内部状態の純電断保持については直接固定できず `UNVERIFIED_AFTER_RESEARCH`。

### gameCounterReset
- 設定変更: **RESET**。
- 据え置き / 純電源OFF→ON: **CARRYOVER**。
- 対象はルパンボーナス/ART間の499/999G天井進捗と、公開資料で比較される周期/カウンター系。

### ceilingAfterReset
- 設定変更後に専用の固定短縮天井が設定されるという資料は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 通常のゲーム数天井候補は499G/999Gで、499G選択率は設定依存。
- CZ「ウォンテッドチャンス」は設定変更後に周期を再選択し、最大480G。

### modeAfterReset
- 設定変更後のウォンテッドチャンス周期は、ルパンボーナス後・ART後と同じ専用テーブルで再選択される。
- ゲーム数解除の「通常A/B/天国」型モードとして明示された公開資料は確認していない。
- 設定変更時のその他長期内部モードは `UNVERIFIED_AFTER_RESEARCH`。

### stateAfterReset
- 高確/低確等の内部状態について、設定変更/据え置き/純電源OFF→ONを直接比較して固定できる本機固有の公開数値は、検索語・資料系統を変更した再探索後も **UNVERIFIED_AFTER_RESEARCH**。
- ウォンテッド周期テーブルは内部「状態」ではなく周期再選択データとして分離。

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 設定変更後のウォンテッド周期は97～160Gが厚い。公開振り分けでは **97～128G 25.0% + 129～160G 39.1% = 64.1%**。
- 1～160Gまでを合算すると **80.6%**（6.3+6.3+3.9+25.0+39.1、各資料の丸め値合算）。
- 実戦ゾーン資料では「特に強いリセット恩恵は無さそう」とする評価もあり、固定的な早期ART確定恩恵とは扱わない。

### resetPenalties
- 設定変更すると前日から進んだゲーム数天井・CZ周期/カウンター進捗を失うため、宵越し狙いには不利。
- 499G仮天井の選択率自体は通常の設定依存値で、設定変更専用優遇とはしない。

### resetDetection
- 設定変更/純電源OFF→ONとも朝一ステージはランダムとされ、ステージ単独判別不可。
- **前日MB成立状態で閉店し、翌朝2G連続10枚払い出しが発生すれば据え置き濃厚**という変更判別法が当時解析に記載。
- 一般的なガックン、初期出目、ランプによる本機固有の確定判別契約は、`消されたルパン / ルパン三世消されたルパン/B4 / 設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / カウンター / MB` へ検索語を変えて再探索したが **NONE_CONFIRMED_AFTER_RESEARCH**。

### numericResetData
#### ウォンテッドチャンス周期G数振り分け — 設定変更後 / ルパンボーナス後 / ART後
| 周期G数 | 振り分け |
|---|---:|
| 1～32G | 6.3% |
| 33～64G | 6.3% |
| 65～96G | 3.9% |
| 97～128G | 25.0% |
| 129～160G | 39.1% |
| 161～192G | 2.0% |
| 193～224G | 2.0% |
| 225～256G | 2.0% |
| 257～288G | 2.0% |
| 289～320G | 2.0% |
| 321～352G | 2.0% |
| 353～384G | 2.0% |
| 385～416G | 2.0% |
| 417～448G | 2.0% |
| 449～480G | 2.0% |
- 公開値は各区間で丸められているため単純合計が100%からわずかにズレ得る。補正・平均化はしない。
- 設定変更専用のART初当たり率・短縮天井固定値: **NONE_CONFIRMED_AFTER_RESEARCH**。

## dataQualityNotes
- 2016-10-12更新の一撃では設定変更/電源OFFON挙動が「現在調査中」だが、別の後続解析資料では設定変更と据え置きの天井/カウンター比較、およびリセット後周期テーブルが明示されている。情報成熟差として両方を保存し、矛盾とは扱わない。
- 雷雲カウンターの朝一表示0ptと内部引継ぎを混同しない。表示上0でも純電断据え置きでは内部カウンターCARRYOVERとする解析表がある。
- 設定変更後の周期振り分けはルパンボーナス後・ART後と同値。通常時CZ失敗後の設定別全周期テーブルは完全再現用のため本レコードでは収集範囲外。
- 検定番号は十分再探索しても直接固定できなかったため推測で埋めない。

## conflicts
- `RESEARCH_MATURITY_RESET_2016_10_UNKNOWN_VS_LATER_ANALYSIS_RESOLVED`: 一撃2016-10-12では設定変更/純電断の天井・モード・状態・ステージが調査中。後続解析では天井/カウンターRESET/CARRYOVER・ステージランダム・設定変更後周期テーブルが公開。後続の具体的契約をcanonicalとし、当時未判明状態も履歴保持。
- `RELEASE_MONTH_2016_07_VS_DATE_2016_08_01`: 中古実機DBの一部は2016年7月表記。K-Navi・当時解析は2016-08-01を具体日で一致して示すためcanonicalは8/1。

## missingFields
- certificationNumber: UNVERIFIED_AFTER_RESEARCH
- settingChangeInternalStateDetailed: UNVERIFIED_AFTER_RESEARCH
- carryOverInternalStateDetailed: UNVERIFIED_AFTER_RESEARCH
- powerCycleInternalStateDetailed: UNVERIFIED_AFTER_RESEARCH

## sources
取得日: 2026-09-08

1. K-Navi — パチスロ ルパン三世～消されたルパン～
   - https://p-kn.com/slot/2529/
   - 2016-08-01ホール導入開始、オリンピア、ART初当たり。
   - reliability: PERIOD_ANALYSIS_HIGH
2. パチスロ新台速報 / pachislo-data — ルパン三世消されたルパン
   - https://pachislo-data.com/olympia/25400
   - 8/1導入予定、約25,000台、スペック、天井/CZ、設定変更後ウォンテッド周期、朝一MB据え置き判別。
   - reliability: PERIOD_ANALYSIS_HIGH
3. 期待値見える化 — ルパン三世 消されたルパン
   - https://slotjin.com/zone/kesaretarupin/
   - ART/機械割、46.1～48.7G/50枚、天井、設定変更=天井/カウンターRESET、電源OFFON=引継ぎ、ステージランダム。
   - reliability: PERIOD_ANALYSIS_HIGH
4. 一撃 — 天井/設定変更
   - https://1geki.jp/slot/s_k_lupin/3/
   - 2016-10-12時点の999/499G天井振り分け。設定変更/電源OFFON詳細は当時「現在調査中」。
   - reliability: PERIOD_ANALYSIS_HIGH
5. 一撃 — 設定判別/立ち回りポイント
   - https://1geki.jp/slot/s_k_lupin/5/
   - ART初当たり、499/999G天井振り分け。
   - reliability: PERIOD_ANALYSIS_HIGH
6. すろぱちくえすと — ルパン三世 消されたルパン解析まとめ
   - https://www.slopachi-quest.com/kisyubetsu/rupin-kesareta/
   - 純増約2.0枚/G、46.1～48.7G/50枚、機械割、ART初当たり、基本G数。
   - reliability: ANALYSIS_HIGH
7. CrankySeven — ルパン三世～消されたルパン～
   - https://crankyseven.com/lupin-kesareta-pc.htm
   - 設定変更で天井到達ゲーム数・周期ゲーム数クリア、初当たり/機械割。
   - reliability: PERIOD_ANALYSIS
8. パチマ — 中古実機
   - https://www.pachima.com/c/slot/s_22olympiak/S00179
   - 型式 `ルパン三世消されたルパン/B4`、ART約2.0枚/G、基本G数。導入月2016年7月表記はCONFLICT保持。
   - reliability: RETROSPECTIVE_MACHINE_DATABASE
9. pachinko's blog — オリンピア「パチスロ ルパン三世 消されたルパン」
   - https://pachinko.hatenablog.jp/entry/2016/08/kesareta-lupin
   - 型式名 `ルパン三世 消されたルパン/B4`、2016年8月リリース。
   - reliability: RETROSPECTIVE_DATABASE
