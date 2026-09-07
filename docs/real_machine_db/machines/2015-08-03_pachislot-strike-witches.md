# パチスロ ストライクウィッチーズ

machineName: パチスロ ストライクウィッチーズ
manufacturer: オーイズミ
releaseDate: 2015-08-03
releaseDatePrecision: exact_nationwide_start_day
releaseDateNote: HAZUSEおよび2015-08-03当日資料が導入開始日を2015-08-03とする。2015年7月表記の後年一覧もあるが、実ホール導入日のcanonicalは08-03。
generation: 5号機
systemType: AT / 疑似ボーナス / 差枚数管理型AT
formalModelName: パチスロストライクウィッチーズVX
inspectionNumber: 5S0213
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity

- メーカー: **オーイズミ**。
- canonical導入日: **2015-08-03**。
- 型式名: **パチスロストライクウィッチーズVX**。
- 検定番号: **5S0213**。
- 2024年のスマスロ続編と混同せず、2015年5号機資料のみを使用。
- confidence: INDUSTRY_HIGH_MULTI_SOURCE

## payoutRateBySetting

| 設定 | 機械割 |
|---:|---:|
| 1 | 97.6% |
| 2 | 99.0% |
| 3 | 101.0% |
| 4 | 103.9% |
| 5 | 107.0% |
| 6 | 111.2% |

- HAZUSE、5号機クロニクル、当時/後年解析で一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

主要初当たりはAT「ウォーロックモード」。

| 設定 | AT初当たり |
|---:|---:|
| 1 | 1/697.3 |
| 2 | 1/667.9 |
| 3 | 1/638.6 |
| 4 | 1/592.7 |
| 5 | 1/538.6 |
| 6 | 1/483.2 |

参考として疑似ボーナス合算は設定1〜6で **1/307.5 / 298.7 / 289.6 / 274.9 / 255.7 / 235.3**。
CZ初当たりは **1/138.8 / 136.3 / 134.4 / 129.3 / 121.8 / 108.8**。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- **約46.8G/50枚**。
- 2015年導入前資料と後年解析で一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease

- AT純増: **約2.2枚/G**。
- グリーンべると（オーイズミ発表会記事）と複数解析で一致。
- confidence: INDUSTRY_HIGH_MULTI_SOURCE

## basicPayout

- 疑似BIG: **55G継続**。
- 疑似REG: **30G継続**。
- AT「ウォーロックモード」: **差枚数管理型AT**。
- AT純増約2.2枚/G。
- ATの初期差枚数について、物差し用に安全に固定できる単一の基本値は今回採用しない。特化ゾーンの詳細振り分けは対象外。

## modeSpecificMinimumData

- AT/ボーナス間G数天井: **1280G**。到達時は **BIG+AT**。
- CZ間天井: **288G**。
- AT非当選のボーナス6回スルー後は、7回目以降のボーナスでAT当選期待度 **約80%**。
- 通常時モードは通常A〜H・天国A〜D。朝一リセット比較に必要な範囲だけ保持し、通常時全移行テーブルは収集しない。
- 有利区間制度導入前。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: COMPLETE_FOR_AVAILABLE_PUBLIC_DATA
resetQaLastUpdated: 2026-09-07

### settingChangeBehavior

- 設定変更時: **天井リセット / 内部モード再抽選 / ステージは滑走路ステージ**。
- 設定変更時モードは公開専用振り分けに従う。
- 20%で天国スタート、60%で通常G以上スタートとなる。
- 内部状態について、モード以外に独立した高確/低確状態を設定変更時にどう扱うかを示す本機固有の公開契約は `UNVERIFIED_AFTER_RESEARCH`。

### carryOverBehavior

- 設定変更なしの据え置きについて、朝一解析の「電源ON・OFF」欄は **天井引継ぎ / 内部モード引継ぎ** を明記するため、通常の閉店電断→翌日ONを伴う据え置きでは少なくともこの2項目が維持される契約を支持する。
- ステージは資料上「調査中」のため、前日ステージ引継ぎとはしない。
- ATスルー回数等の全内部カウンタまで同じ契約として拡張しない。

### powerCycleBehavior

- **設定変更なし電源OFF→ON:** 天井 **引き継ぐ** / 内部モード **引き継ぐ**。
- ステージ: 当時解析で **調査中**。`UNVERIFIED_AFTER_RESEARCH`。
- 設定変更と純電断を同義扱いしない。

### gameCounterReset

- 設定変更時: **RESET**（AT/ボーナス間天井）。
- 純電源OFF→ON: **CARRY_OVER**。
- 据え置き: 上記純電断契約に基づき、通常の据え置き営業日跨ぎでは **CARRY_OVER_SUPPORTED**。
- CZ間天井やATスルー回数の設定変更時個別リセット契約は、主要天井リセットから自動拡張せず `UNVERIFIED_AFTER_RESEARCH`。

### ceilingAfterReset

- 設定変更後もAT/ボーナス間最大天井は **1280G**として扱う。
- 「設定変更時のみ固定で短縮される天井」は `NONE_CONFIRMED_AFTER_RESEARCH`。
- ただしモード再抽選により **20%で天国**となり、その場合 **32G以内にCZ確定**。これは天井G短縮ではなくモード恩恵として分離する。

### modeAfterReset

設定変更時の公開モード振り分け:

| モード | 振り分け |
|---|---:|
| 通常A | 5.00% |
| 通常B | 5.00% |
| 通常C | 5.00% |
| 通常D | 5.00% |
| 通常E | 10.00% |
| 通常F | 10.00% |
| 通常G | 20.00% |
| 通常H | 20.00% |
| 天国A | 17.50% |
| 天国B | 2.25% |
| 天国C | 0.20% |
| 天国D | 0.05% |

- 天国合計: **20.00%**。
- 通常G/H合計: **40.00%**。通常G以上全体は天国込み **60.00%**。
- 天国時は **32G以内のCZ確定**。
- 設定変更なし電源OFF→ON: **モード引継ぎ**。

### stateAfterReset

- 独立した内部高確/低確状態の設定変更時再抽選/引継ぎ契約: `UNVERIFIED_AFTER_RESEARCH`。
- モード再抽選は上記 `modeAfterReset` に分離。

### advantageousSectionReset

- `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### resetBenefits

- 朝一リセット時 **20%で天国**。
- 天国なら **32G以内のCZ確定**。
- 朝一リセット時は **60%で通常G以上**となり、浅いCZへの期待が相対的に高い。
- これは設定変更専用の公開モード振り分けに基づく朝一恩恵。

### resetPenalties

- 設定変更で前日のAT/ボーナス間天井進捗が消失するため、前日ハマリの宵越し期待は失われる。
- その他の設定変更専用不利要素: `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection

- 朝一リセット台を数G回し、**即前兆が発生すれば天国濃厚**とする当時解析がある。天国なら32G以内CZ確定のため、朝一挙動からリセット後の高モードを推測する材料になる。
- ただし即前兆は「設定変更そのものの確定」ではなく、リセット前提店舗での天国推測材料として扱う。
- 本機固有のガックン/初期出目による設定変更確定契約は、再探索後も `NONE_CONFIRMED_AFTER_RESEARCH`。
- 設定変更時の滑走路ステージ固定は確認できるが、純電断時ステージが「調査中」のため、ステージだけで確定判別できるとはしない。

### numericResetData

- 設定変更時天国合計: **20.00%**。
- 設定変更時通常G/H合計: **40.00%**。
- 設定変更時通常G以上（G/H+天国）: **60.00%**。
- 天国時: **32G以内CZ確定**。
- 設定変更時モード個別値は `modeAfterReset` 表を参照。

## conflicts

- `RELEASE_MONTH_2015_07_VS_EXACT_HALL_START_2015_08_03`:
  - 5号機クロニクル: 2015/7。
  - HAZUSE / 当日導入資料 / 複数解析: 2015-08-03。
  - 月次分類と実ホール導入日の差として、canonicalは2015-08-03。
- 主要性能値には今回、平均化を要する実質的CONFLICTなし。

## missingFields

- 設定変更時のモードとは別の独立内部状態契約: `UNVERIFIED_AFTER_RESEARCH`。
- CZ間天井・ATスルー回数の設定変更時個別カウンタ契約: `UNVERIFIED_AFTER_RESEARCH`。
- 純電断時ステージ: `UNVERIFIED_AFTER_RESEARCH`（当時資料も調査中）。
- 本機固有ガックン等: `NONE_CONFIRMED_AFTER_RESEARCH`。

## sources

取得日: 2026-09-07

1. HAZUSE「パチスロ ストライクウィッチーズ」 — https://hazuse.com/machine/pachislot/5S0213/
   - 導入開始2015-08-03、メーカー、型式、検定番号、設定別機械割・ボーナス/AT初当たり、天井/モード構造を確認。
2. グリーンべると 2015-06-26 — https://web-greenbelt.jp/00007898/
   - オーイズミ発表会、純増2.2枚/Gの差枚数管理型ATを確認。
3. ちょんぼりすた「ストライクウィッチーズ スロット｜完全攻略」 — https://chonborista.com/slot/oizumi-slot/9825/
   - 設定別性能、46.8G/50枚、1280G/CZ間288G/6スルー、朝一設定変更と電源ON・OFFの比較、モード振り分けを確認。
4. すろぱちくえすと「設定変更・リセット恩恵」 — https://www.slopachi-quest.com/article/strike-witches-reset/
   - 設定変更時モード振り分け、リセット時20%天国、天国32G以内CZ、即前兆による朝一狙いを照合。
5. スロ板-RUSH 2015-07-28 — https://fiveslot777.com/archives/45721094.html
   - 導入日2015-08-03、千円ベース46.8G、純増2.2枚/G、BIG55G/REG30G、1280G天井を当時資料として照合。
6. 5号機クロニクル「オーイズミ」 — https://5goki.com/oizumi
   - 設定別機械割を照合。導入時期2015/7表記はexact hall-start資料と分離。
7. pachinko’s blog 2015-08-01 — https://pachinko.hatenablog.jp/entry/2015/08/strike-witches
   - 型式名パチスロ ストライクウィッチーズ VX、2015年8月リリースを補助確認。

## researchNotes

- 2024年スマスロ続編の検索結果が大量に混入するため、`2015 / 5号機 / VX / 5S0213 / オーイズミ`を併用して旧機を限定。
- reset探索は `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / モード / ガックン / ステージ`を組み替えた。
- 通常時全モード移行テーブルやCZ内部抽選は、実機完全再現用の詳細なので収集していない。
