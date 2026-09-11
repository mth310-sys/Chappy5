更新日: 2026-09-12

## 現在地点
- recordCount: **1429**
- latestRecordAdded: **パチスロ麻雀物語4 — No.1429**
- latestRecordAddedPath: `docs/real_machine_db/machines/2021-09-06_mahjong-monogatari-4.md`
- chronologicalFrontier: **2021-09-06**
- frontierLatestMachine: **パチスロ麻雀物語4 — No.1429**
- schema: **resetBehavior v0.7**
- status: **2021-09-06_GROUP_OPEN_2_OF_4_KNOWN_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前No.1428「パチスロ うしおととら 雷槍一閃」を確認して開始。
- `INDEX.md` は旧19件表示のため、README規定どおり `LATEST_HANDOFF.md` とmain実レコードを正本として進捗判定。
- 作業開始時点で並行更新によりNo.1428まで進行していたため、既存レコードをやり直さず次の未処理機種No.1429「パチスロ麻雀物語4」を追加。
- 遡及resetBehavior QAは本線を優先して今回は進めず、次カーソル「機動警察パトレイバーX」を維持。

## No.1429 — パチスロ麻雀物語4
- path: `docs/real_machine_db/machines/2021-09-06_mahjong-monogatari-4.md`
- manufacturer: **オリンピア（平和販売）**
- formalModel: **S麻雀物語4L2**
- certificationNumber: **1S0417**
- releaseDate: **2021-09-06**
- generation/system: **6.1号機 / AT（差枚数管理）**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payoutRate: **97.5 / 98.4 / 101.6 / 104.3 / 106.5 / 108.3%**
- AT初当たり: **1/184.1 / 1/180.6 / 1/168.9 / 1/157.1 / 1/148.2 / 1/142.2**
- CZ麻雀チャレンジ: **1/265.8（全設定共通）**
- baseGamesPer50: **約33G/50枚**
- netIncrease: **麻雀グランプリ約2.6枚/G / 雀張DREAM約4.7枚/G**
- basicPayout: **麻雀グランプリ初期100枚+α / 雀張DREAM平均期待約1400枚**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_PUBLIC_RESET_CORE_WITH_SHORTENED_CEILING**

### resetBehavior v0.7 — No.1429
- **設定変更**: 天井・内部モード・内部状態・有利区間RESET。内部モードは通常B以上。
- **据え置き/純電源OFF→ON**: 天井・内部モード・内部状態・有利区間CARRY_OVER。
- **短縮天井**: 設定変更時は最深約550G+α～555G。通常A最深999G+α級より短縮。
- **朝一恩恵**: 通常B以上、短縮天井、128G以内ATにも期待できる。リセット後PAY OUT100%以上との当時解析記載あり（厳密条件非公表のため参考値扱い）。
- **注意**: 設定変更以外の有利区間リセット時は天国濃厚/128G以内AT確定だが、設定変更時は明示的に除外されるため混同しない。
- **変更判別**: 通常時有利区間ランプ点灯型。朝一消灯＝設定変更濃厚、点灯＝据え置き濃厚（前日消灯閉店・店側対策除外）。
- **公開数値**: 設定変更専用の通常B/C/天国個別振り分け、128G以内AT正確率、本機固有ガックンは再探索後も直接値を固定できず推測していない。

## CONFLICT / 表記差 — No.1429
- 通常A天井: **999G+α**中心 / 後年整理資料に**930G+α**。平均化せず併記。
- 設定変更天井: **550G+α級** / なな徹**555G**。同短縮帯の原表記差として保持。
- 設定4 AT初当たり: 高信頼複数資料 **1/157.1** / 一部二次資料 **1/157.9**。canonicalは1/157.1、alternateはCONFLICT保持。

## 2021-09-06群 — OPEN
1. **パチスロ うしおととら 雷槍一閃 — No.1428 / DONE**
2. **パチスロ麻雀物語4 — No.1429 / DONE**
3. **パチスロ楽園追放 — No.1430候補 / NEXT**
4. **パチスロ ロリクラ☆ほーるど！ — 後続候補**
- 4機処理後、メーカー横断・PB・地域先行・別型式・延期/段階導入を再監査してCLOSED可否を判断する。

## 次回本線の再開地点
- 最新main再同期後、**2021-09-06群「パチスロ楽園追放」No.1430候補**から継続。
- その後 **パチスロ ロリクラ☆ほーるど！** を処理し、同日群を横断監査する。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 前回処理済み: `docs/real_machine_db/machines/2007-05_sangokushi-igt.md`（三國志 / IGTジャパン）→ **PARTIAL_RESEARCH_EXHAUSTED**。
- 次回遡及QAカーソル: **`docs/real_machine_db/machines/2007-05_kidou-keisatsu-patlabor-x.md`（機動警察パトレイバーX）**。

## GitHub保存
- No.1429追加 commit: `4d00122264507cf629f526b72a68bc61947e51d6`
- `LATEST_HANDOFF.md`: この更新commitでmainへ反映。

## 主要出典 — 取得日 2026-09-12
### No.1429 パチスロ麻雀物語4
- https://news.p-world.co.jp/articles/17163/nippon
- https://news.p-world.co.jp/articles/17144/playgraph
- https://hazuse.com/machine/pachislot/1S0417/
- https://p-kn.com/slot/3631/
- https://nana-press.com/kaiseki/machine/141/4694/
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/150/at01-1.php
- https://ichikatsu.com/mj4/
- https://nana-press.com/kaiseki/machine/141/4915/
- https://chonborista.com/slot/orinpia-slot/144375/
- https://2-9densetsu.com/mj4/
- https://www.p-world.co.jp/machine/database/9428
