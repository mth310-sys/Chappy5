更新日: 2026-09-12

## 現在地点
- recordCount: **1499**
- latestRecordAdded: **パチスロ ゼーガペイン2 — No.1499**
- latestRecordAddedPath: `docs/real_machine_db/machines/2022-05-23_pachislot-zegapain2.md`
- chronologicalFrontier: **2022-05-23**
- frontierLatestMachine: **パチスロ ゼーガペイン2 — No.1499**
- schema: **resetBehavior v0.7**
- status: **2022-05-23_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧 `docs/real_machine_db/INDEX.md`、最新 `LATEST_HANDOFF.md`、既存末尾レコードを確認して開始。
- `INDEX.md` は旧表示のため、README規定どおり最新 `LATEST_HANDOFF.md` とmain実レコードを進捗正本として扱った。
- No.1499 `パチスロ ゼーガペイン2` を追加。2022-05-23実導入を複数実導入系資料で照合し、旧予定資料の2022-05-09 / 5月上旬表記は `DATE_CONFLICT` として保持。
- 型式 `Sパチスロゼーガペイン2ZZ`、検定番号 `1S1425`。製造元は山佐、販売・ブランドは山佐ネクストとして役割分離。
- 性能コアは設定1〜6、機械割97.9/98.7/100.2/104.4/106.6/110.2%、AT初当り1/585.7→1/282.6、約38G/50枚、純増約1.2枚/G、BIG203枚固定、REG約100枚を固定。`COMPLETE_CORE`。
- resetBehaviorは設定変更 / 据え置き / 純電源OFF→ONを分離。設定変更時は有利区間RESET・内部状態RESET後に高確15G以上濃厚。一方、ボーナス間899G天井カウンタは設定変更・有利区間リセット・AT当選でもCARRY_OVERする特殊仕様。
- 設定変更後の固定短縮天井はなし。前日ハマリを宵越し可能。通常時は有利区間ランプ非点灯型のためランプ判別不可。朝一15G内の高確示唆は変更期待度UP材料だが確定ではない。
- なな徹の朝一概要表に「設定変更時 天井リセット」とある一方、同一ページ本文およびパチマガ、HAZUSE、1geki、ちょんぼりすた等は天井引継ぎで一致。平均化せず `CONFLICT` 保持し、canonicalはCARRY_OVER。
- RAMクリア時は通常設定変更と別条件で「天井状態」開始とする解析があるため分離保持。

## No.1499 — パチスロ ゼーガペイン2
- path: `docs/real_machine_db/machines/2022-05-23_pachislot-zegapain2.md`
- manufacturer: **山佐ネクスト（製造元: 山佐）**
- formalModel: **Sパチスロゼーガペイン2ZZ**
- inspectionCode: **1S1425**
- releaseDate: **2022-05-23**
- generation/system: **6.2号機 / A+AT / リアルボーナス + CZ + ゲーム数上乗せAT**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payoutRate: **97.9 / 98.7 / 100.2 / 104.4 / 106.6 / 110.2%**
- AT初当り: **1/585.7 / 1/549.2 / 1/487.7 / 1/390.1 / 1/340.3 / 1/282.6**
- bonus合算: **1/258.0 / 1/256.0 / 1/254.0 / 1/252.1 / 1/250.1 / 1/246.4**
- baseGamesPer50: **約38G/50枚**
- netIncrease: **約1.2枚/G**
- normalCeiling: **ボーナス間899G消化後、次回ボーナスでAT確定CZ**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_RESET_CORE_WITH_CONFLICT_NOTES**
- confidence: **HIGH_CORE / HIGH_RESET**

### resetBehavior v0.7 — No.1499
- **設定変更**: 有利区間RESET。内部状態RESET後、高確15G以上濃厚。カミナギステージ / 液晶0G。
- **据え置き**: 有利区間・内部状態・天井G数CARRY_OVER。
- **純電源OFF→ON**: 有利区間・内部状態・天井G数CARRY_OVER。カミナギステージ / 液晶0G。
- **ゲーム数/天井**: ボーナス間899G天井カウンタは設定変更・有利区間リセット・AT当選でもCARRY_OVER。
- **天井短縮**: 設定変更専用の固定短縮なし。
- **モード/状態**: 設定変更後は高確15G以上濃厚。有利区間移行時も高確スタート。
- **有利区間**: 設定変更RESET、据え置き/純電断CARRY_OVER。
- **朝一恩恵**: 高確15G以上。前日ハマリを宵越し可能。
- **変更判別**: 通常時ランプ非点灯型のため朝一ランプ判別不可。朝一15G内の高確示唆は変更期待度UPだが確定ではない。本機固有ガックンはUNVERIFIED_AFTER_RESEARCH。
- **公開朝一数値**: 高確15G以上、天井899Gカウンタ引継ぎ。

## 2022-05-23群 — CLOSED
横断監査で確認した既知実導入2機種:
1. `ぱちすろ けものフレンズ` — **No.1498 処理済み**
2. `パチスロ ゼーガペイン2` — **No.1499 処理済み**

- 2022年導入カレンダー、当時新台予定一覧、実導入記事を再監査し、5/23の追加独立パチスロ機種は確認できなかったため **CLOSED**。
- ゼーガペイン2の5/9表記は旧予定情報としてDATE_CONFLICT保持し、実導入時系列のcanonicalは5/23。

## 次境界監査 / 2022-06-06群
2022-05-24〜06-05境界を検索し、現時点で独立実導入は確認できず。次の既知導入群は **2022-06-06**。

現時点の既知3機種:
1. `パチスロ ピンクパンサーSP` — **次回No.1500候補**
2. `Sキャッツ・アイ`
3. `シリウス`（ヤーマ）

- 1geki 2022年6月カレンダーではピンクパンサーSP / Sキャッツ・アイを確認。
- なな徹の2022上半期回顧では同日 `シリウス` も確認。見落とさず独立レコード候補として保持。
- 次回はNo.1500候補 `パチスロ ピンクパンサーSP` から性能コア＋resetBehavior v0.7を収集し、同日3機を順次処理する。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 前回処理: `docs/real_machine_db/machines/2007-02-18_kagaku-ninjatai-gatchaman.md`（科学忍者隊ガッチャマン）。
- 性能側 `coreStatus: COMPLETE_CORE` は維持。
- reset側は **PARTIAL_RESEARCH_EXHAUSTED**。設定変更/据え置き/純電断時の1300G天井カウンタ、GT/G-ZONE内部状態、本機固有resetDetectionは直接契約を固定できず未推測。
- 次回遡及QAカーソル: **`docs/real_machine_db/machines/2007-02-12_tim-to-iu-na-no-pachislotki.md`（TIMという名のパチスロ機）**。現行mainで `resetBehaviorQA: PARTIAL` を確認済み。

## 次回本線の再開地点
- **No.1500候補 `パチスロ ピンクパンサーSP` — 2022-06-06。**
- その後 `Sキャッツ・アイ` → `シリウス` を処理し、6/6群をPB・別型式・地域先行・延期/段階導入まで再監査してCLOSED可否を判定する。

## GitHub保存
- No.1499追加 commit: `de31f914ee9687fbfa719fc295c70443365400c6`
- `LATEST_HANDOFF.md`: この更新commitでmainへ反映。

## 主要出典 — 取得日 2026-09-12
### No.1499 パチスロ ゼーガペイン2
- https://news.p-world.co.jp/articles/19472/nippon
- https://p-bomb.co.jp/industry/maker/3685/
- https://hazuse.com/machine/pachislot/1S1425/
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasanext_slot/06/kr01.php
- https://nana-press.com/kaiseki/machine/337/10070/
- https://1geki.jp/slot/s_zegapain2/3/
- https://chonborista.com/slot/yamasa-slot/164299/
- https://pachiseven.jp/machines/6532/cutout/15
- https://ichikatsu.com/newslot2022/
- https://crankyseven.com/newmachine-info.htm
- https://www.goraku-sangyo.com/%E5%B1%B1%E4%BD%90%E3%83%8D%E3%82%AF%E3%82%B9%E3%83%88%E3%80%80%E6%96%B0%E6%A9%9F%E7%A8%AE%E3%80%8C%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD-%E3%82%BC%E3%83%BC%E3%82%AC%E3%83%9A%E3%82%A4%E3%83%B32%E3%80%8D/
- https://p-kn.com/slot/3760/

### 2022-06-06群境界監査
- https://1geki.jp/newmachinecalender/202206/
- https://nana-press.com/post/1576830
- https://news.p-world.co.jp/articles/20702/nippon
- https://news.p-world.co.jp/articles/20664/nippon
