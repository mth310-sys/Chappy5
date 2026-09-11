更新日: 2026-09-11

## 現在地点
- recordCount: **1339**
- latestRecordAdded: **いろはに愛姫 — No.1339**
- latestRecordAddedPath: `docs/real_machine_db/machines/2020-03-02_irohani-megohime.md`
- chronologicalFrontier: **2020-03-02**
- frontierLatestMachine: **いろはに愛姫 — No.1339**
- schema: **resetBehavior v0.7**
- status: **2020-03-02_GROUP_OPEN_2_OF_6_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、No.1338「S 地獄少女 あとはあなたが決めることよ」を再取得して開始。
- `INDEX.md` は旧19件表示のため、README規定どおり最新 `LATEST_HANDOFF.md` とmain実レコードを正とした。
- 開始時main最新handoffが No.1338 / 2020-03-02群OPEN_1_OF_6であることを確認し、前回会話上の古いNo.1334地点へ戻らず正本から継続。
- No.1338 handoff指定の次の未処理 `いろはに愛姫` をNo.1339として追加。
- 2020-03-02群は既知6機のうち2機処理済み。群はOPENのまま。

## No.1339 — いろはに愛姫
- path: `docs/real_machine_db/machines/2020-03-02_irohani-megohime.md`
- manufacturer: **パオン・ディーピー（大都技研ブランド）**
- formalModel: **Sいろはに愛姫PA5**
- certificationNumber: **9S1421**
- releaseDate canonical: **2020-03-02**
- generation/system: **6号機 / A+ART / 特殊4段階設定（左・中・右・6）**
- payoutRate: **設定左/中/右 96.8〜104.1%（押し順偏向の見抜き/攻略度依存） / 設定6 106.0%**
- BIG: **左/中/右 1/268.6 / 設定6 1/245.5**
- REG: **左/中/右 1/385.5 / 設定6 1/246.4**
- ボーナス合算: **左/中/右 1/158.3 / 設定6 1/123.0**
- base: **約37G/50枚**
- netIncrease: **ART約0.3枚/G**
- BIG: **最大約150枚**
- REG: **最大約40枚**
- ART「隻眼ノ嫁」: **初期30G+α / 平均初期100G超**
- 天井: **非搭載**

### resetBehavior v0.7 — No.1339
- resetBehaviorQA: **COMPLETE_PUBLIC_RESET_CORE_WITH_DETECTION_GAPS**
- settingChangeBehavior: **有利区間RESET / 内部状態RESET / 液晶は城内ステージ**。
- carryOverBehavior: 据え置きは設定変更なし。純電断を伴う通常営業運用では状態/モードCARRY_OVER契約として整理。独立した据え置き専用の詳細資料は限定的。
- powerCycleBehavior: **内部状態・モードCARRY_OVER / 液晶は城内ステージ**。
- gameCounterReset / ceilingAfterReset: **N/A（ゲーム数天井非搭載）**。
- modeAfterReset / stateAfterReset: 設定変更RESET / 純電断CARRY_OVER。
- advantageousSectionReset: 設定変更RESET。純電断/据え置きの朝一ランプ詳細は直接固定できずUNVERIFIED。
- resetBenefits: **短縮天井なし。設定変更専用初当たり優遇・朝一専用モード数値は確認できず**。
- resetPenalties: 設定変更で前日の内部状態/優遇モードを消去。天井非搭載なので宵越し天井消去はN/A。
- resetDetection: 設定変更・純電断とも城内ステージのため**朝一ステージ単独判別不可**。本機固有ガックン/有利区間ランプ確定判別契約は再探索後もUNVERIFIED。
- publicMorningNumbers: 設定変更専用数値は固定できず。参考として通常時スイカ成立時の優遇モード移行率 **左/中/右4.30% / 設定6 8.59%**、3択青7正解比率 **左50/25/25・中25/50/25・右25/25/50%**を定義分離して保存。

## No.1339 品質注記
- 大都技研公式、グリーンべると/P-WORLD業界記事、HAZUSE、1geki、K-Navi、パチマガスロマガ等を横断。
- 型式/検定番号、導入日、A+ART、ボーナス確率、ベース、純増、獲得枚数、天井非搭載、設定変更/純電断の主要契約を複数系統で照合。
- 左/中/右の機械割を固定3値へ変換する後年資料もあるが、本機は押し順偏向を見抜く攻略度で96.8〜104.1%へ変動する特殊構造。業界当時説明と主要解析を優先し、レンジをcanonicalとして保持。
- ガックン、有利区間ランプによる朝一変更判別、設定変更専用モード振り分け/初当たり優遇値は検索語・資料系統変更後も固定できずUNVERIFIED/PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。

## 2020-03-02群監査
- 既知6機: **S地獄少女 あとはあなたが決めることよ / いろはに愛姫 / パチスロ ケロット4 / エヴァンゲリオン フェスティバル / キングオブジャック / パチスロ ハナペカ**。
- S地獄少女 — No.1338 処理済み。
- いろはに愛姫 — No.1339 処理済み。
- パチスロ ケロット4 — 未処理。
- エヴァンゲリオン フェスティバル — 未処理。
- キングオブジャック — 未処理。
- パチスロ ハナペカ — 未処理。
- 群判定: **OPEN_2_OF_6_PROCESSED**。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 本リレーでは新規時系列キュー継続を優先。遡及QA再開地点はmain実ファイル順から再計算し、既処理機を再処理しない。

## 次回再開地点
1. 最新main README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1339を再取得。
2. **2020-03-02群の次の未処理 `パチスロ ケロット4` をNo.1340候補として処理**。
3. 続いて `エヴァンゲリオン フェスティバル → キングオブジャック → パチスロ ハナペカ` を同じ群キューで処理。
4. 6機完了後、全メーカー/別型式/別スペック/PB/地域差を再監査して2020-03-02群CLOSED可否を判定する。
5. PSO2はNo.1337で2/24 canonical・2/25一部・3/2全国本格の導入日差を保持済みのため重複登録しない。

## 主要出典 — 取得日 2026-09-11
### No.1339 いろはに愛姫
- 大都技研公式: https://www.daitogiken.com/contents/product/slot/megohime/
- P-WORLD / グリーンべると: https://news.p-world.co.jp/articles/12804/greenbelt
- HAZUSE: https://hazuse.com/machine/pachislot/9S1421/
- HAZUSE 基本スペック: https://hazuse.com/machine/pachislot/9S1421/genre/201/
- HAZUSE 設定推測: https://hazuse.com/machine/pachislot/9S1421/genre/208/
- 1geki 天井/設定変更: https://1geki.jp/slot/s_megohime/3/
- 1geki 優遇モード: https://1geki.jp/slot/s_megohime/43/
- K-Navi: https://p-kn.com/slot/3405/
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/paondp_slot/02/a.php
- パチマガスロマガ ART: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/paondp_slot/02/03.php
- パチマガスロマガ 優遇モード: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/paondp_slot/02/04.php
- おスロおパチおいでやす: https://oslo-opachi.com/2020/02/22/irohani_megohime_settei/
- スロがち.COM: https://slogati.com/irohani/
