更新日: 2026-09-08

## 現在地点
- recordCount: **1006**
- latestRecordAdded: **パチスロ ロストプラネット2**（オリンピア）
- latestRecordAddedPath: `docs/real_machine_db/machines/2016-09-05_lost-planet2.md`
- chronologicalFrontier: **2016-09-05**
- frontierLatestMachine: **パチスロ ロストプラネット2**（オリンピア）
- schema: **resetBehavior v0.7**
- status: **2016-09-05_GROUP_OPEN**

## 今回の同期 / 境界監査
- 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1005 `2016-09-05_blood-plus-futari-no-joou.md` を再取得して開始。
- INDEXは19件時点の旧集約なので、README規定どおり LATEST_HANDOFF + 実レコード + 最新main を進捗正本として使用。
- 開始時点の正本は recordCount 1005 / 2016-09-05群OPEN。会話上の旧地点No.1003には戻らず、handoff指定の次未処理 **パチスロ ロストプラネット2** をNo.1006として処理。
- 2016-08-22群は前リレーで `CLOSED_FOR_CURRENT_RESEARCH` 済み。08/23〜09/04の全国導入パチスロ未固定という境界判断を引き継ぎ、09/05群を継続。

## No.1006 — パチスロ ロストプラネット2
- manufacturer: **オリンピア**
- releaseDate: **2016-09-05**
- formalModelName: **パチスロロストプラネット2／E2**
- certificationNumber: **6S0394**
- generation/system: **5号機 / ART**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7**

### performanceCore
- 機械割: **96.7 / 98.1 / 100.1 / 103.5 / 105.0 / 110.0%**。
- ART初当たり: **1/314.8 / 305.9 / 284.5 / 251.1 / 239.0 / 197.9**。
- CZ「GET READY」初当たり: **1/113.0 / 110.3 / 99.6 / 91.4 / 88.0 / 77.7**。成功率は設定1 36.0% → 設定6 44.3%。
- ベース: **約47G/50枚**。
- ART「エイクリッドバトル」: **約2.0枚/G**。固定セットG数/固定枚数ではなく、味方が全滅するまで継続する完全バトル型。
- 通常天井: **ART間740G+前兆 → ART**。
- 正式型式/検定番号は鹿児島県公安委員会告示で確認。純増2.0枚/Gは2016-07-08グリーンべると業界記事、P-WORLD、複数解析で照合。

### resetBehavior v0.7
- 設定変更: **天井RESET / 惑星モード再抽選 / キャリアポイント初期再セット**。
- 据え置き: **天井ゲーム数・惑星モードCARRYOVER**。キャリアポイントも設定変更時初期化契約に該当しないため蓄積価値を保持する扱い。
- 純電源OFF→ON: **天井ゲーム数・惑星モードCARRYOVER**。キャリアポイントは設定変更時のみ初期セットという契約からCARRYOVER支持だが、電断単独のポイント比較表は直接固定できず注記。
- 朝一液晶は設定変更/電断とも**ジャングルステージ**とする解析整理があり、ステージ単独の変更判別は困難。
- 設定変更専用の固定短縮天井は再探索後も **NONE_CONFIRMED_AFTER_RESEARCH**。
- 有利区間: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### 公開朝一数値
設定変更時・惑星モード振り分け:
- 設定1: **A66.4 / B18.8 / C14.5 / D0.4%**
- 設定2: **A62.5 / B20.7 / C16.4 / D0.4%**
- 設定3: **A58.6 / B22.7 / C18.4 / D0.4%**
- 設定4: **A54.7 / B24.6 / C20.3 / D0.4%**
- 設定5: **A50.8 / B26.6 / C22.3 / D0.4%**
- 設定6: **A46.9 / B28.5 / C24.2 / D0.4%**
- 検索表示で設定2〜6のD列が省略される資料があるが、各行A+B+C=99.6%、同表設定1 D=0.4%のため同一表構造として0.4%保持。原表表示注意をレコードに明記。

設定変更時・キャリアポイント初期振り分け:
- **40pt 28.1 / 60pt 32.8 / 80pt 32.8 / 100pt 5.9 / 200pt 0.4%**。
- 40〜80pt開始 **93.7%**、100pt以上 **6.3%**。

### resetBenefits / penalties / detection
- 恩恵: キャリアポイントが最低40pt以上から初期化され、惑星モードも再抽選。高設定ほどB/C比率が上がる。
- 不利: 設定変更で前日天井進捗、上位惑星モード、蓄積キャリアポイントの宵越し価値を失う可能性。
- 変更判別: 朝一ステージ単独は不可。前日MB出目を仕込めるホールでの出目変化を当時攻略が実用材料としているが、ホール運用依存でメーカー保証ではない。本機固有の確定ガックン/ランプは再探索後も **NONE_CONFIRMED_AFTER_RESEARCH**。

### data quality / conflicts
- `CONFLICT_RELEASE_DATE_2016_09_05_VS_2016_09_04_SINGLE_LATE_DB`: 主要当時解析は2016-09-05、一部後年中古実機DBのみ2016-09-04。canonicalは09-05。
- 低確/高確等の別建て内部状態について設定変更/据え置き/純電断の直接契約は **UNVERIFIED_AFTER_RESEARCH**。
- 純電断時キャリアポイントの独立した直接比較記述は **UNVERIFIED_DIRECT_WORDING_AFTER_RESEARCH**。設定変更時のみ初期値セット契約からCARRYOVER支持。

## 2016-09-05群 — OPEN
登録済み:
- **パチスロBLOOD+ 二人の女王**（タイヨーエレック）
- **パチスロ ロストプラネット2**（オリンピア）

次の確認済み候補:
- **パチスロ未来日記**（EXCITE / ニューギン系） — 2016-09-05をK-Navi/解析で先行確認済み。

同日全メーカー監査は未完了。未来日記を処理後、当時導入一覧・メーカー別一覧・業界記事を横断して追加漏れを確認してからCLOSED判定する。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-03-27_kengou-musashi.md**
- retroQaNextInspection: **2006-03-27_golgo13-the-professional.md**
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**
- 今回は新規本線を優先し、遡及QA地点は変更なし。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1006を再取得。
2. **1006件 / 2016-09-05群OPEN → パチスロ未来日記（EXCITE / ニューギン系）**を次の未処理機としてNo.1007へ収集。
3. 未来日記処理後、09/05同日全メーカー監査を実施。
4. 09/05群に追加漏れがなければCLOSED → 次の導入日境界へ進む。
5. 遡及QAは `2006-03-27_golgo13-the-professional.md` から順次継続。
6. PARTIAL/UNVERIFIEDは表記揺れ・型式・メーカー・シリーズ・設定変更/据え置き/電断/天井/モード/ガックン等へ検索語を変え、公式・業界・当時解析・古DB・回顧資料を横断した後のみ確定。競合は平均せずCONFLICT。

## 主要出典 — 取得日 2026-09-08
### No.1006 パチスロ ロストプラネット2
- オリンピア公式: https://www.olympia.co.jp/newmachine/ps_lostplanet2/
- 鹿児島県公報（公安委員会告示第60号）: https://www.pref.kagoshima.jp/ab04/kensei/jourei/kouhou/1606/documents/52290_20160606115316-1.pdf
- グリーンべると: https://web-greenbelt.jp/00008788/
- P-WORLD: https://www.p-world.co.jp/machine/database/8105
- pachislo-data: https://pachislo-data.com/olympia/26459
- ちょんぼりすた: https://chonborista.com/slot/orinpia-slot/22503/
- 期待値見える化: https://slotjin.com/zone/lostplanet2/
- すろぱちくえすと解析まとめ: https://www.slopachi-quest.com/kisyubetsu/lost-planet2/
- すろぱちくえすと リール/MB: https://www.slopachi-quest.com/article/lost-planet2-reel/
- スロ安サーチ（09-04競合原値）: https://slot-price.com/slot_price_details/id/924

### 次候補確認
- パチスロ未来日記: https://p-kn.com/slot/2561/
