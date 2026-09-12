更新日: 2026-09-12

## 現在地点
- recordCount: **1443**
- latestRecordAdded: **ハイハイシオサイ2 — No.1443**
- latestRecordAddedPath: `docs/real_machine_db/machines/2021-11-08_haihai-shiosai2.md`
- chronologicalFrontier: **2021-11-08**
- frontierLatestMachine: **ハイハイシオサイ2 — No.1443**
- schema: **resetBehavior v0.7**
- status: **2021-11-08_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前No.1442「パチスロ戦国乙女 暁の関ヶ原-DARKNESS-」を確認して開始。
- `INDEX.md` は旧19件表示のため、README規定どおり `LATEST_HANDOFF.md` とmain実レコードを正本として進捗判定。
- handoff指定の次機No.1443「ハイハイシオサイ2」を追加。
- 当時業界記事、HAZUSE、必勝本、K-Navi、パチビー、パチマガスロマガ、解析資料を横断し、型式・検定番号・導入日・設定別BIG/REG/合算/機械割・ベース・獲得枚数・天井非搭載・resetBehaviorを照合。
- 設定変更固有の朝一公開数値として、**設定変更後1回目のボーナスで技術介入成功時カモメランプ紫が設定2～6で10.0 / 10.5 / 11.0 / 11.5 / 12.0%**となる点を保存。通常2回目以降は2.0 / 2.1 / 2.2 / 2.3 / 2.4%。
- 一部二次資料は設定変更後1回目の青/赤通常比率と紫変更後比率を同一行に並べ、設定2以上で合計100%を超える。勝手に正規化せずCONFLICTとして保持し、HAZUSEと別資料で一致する紫率だけをcanonicalな変更専用値に採用。
- 天井非搭載のノーマル機なので、ゲーム数天井短縮・AT/CZモード・朝一有利区間狙いは物差し上NOT_APPLICABLE。純電源OFF→ONだけで設定変更後1回目専用カモメテーブルが再セットされるか、本機固有ガックンは再探索後も直接資料を固定できず推測補完しない。
- 2021-11-08群は、ANEMONE / CCエンジェル / GANTZ極 / 戦国乙女DARKNESS / ハイハイシオサイ2 の5機で複数導入カレンダーが一致。メーカー系統・PB・25/30Φ別型式・地域先行・延期/段階導入も再監査し、追加未処理を確認できなかったため **CLOSED**。
- 2021-11-09～11-21境界を導入カレンダーで監査し、次の確認済み新台は2021-11-22「Re:ゼロから始める異世界生活 Apex Vacation」。

## No.1443 — ハイハイシオサイ2
- path: `docs/real_machine_db/machines/2021-11-08_haihai-shiosai2.md`
- manufacturer: **パイオニア**
- formalModel: **Sハイハイシオサイ2HY**
- certificationNumber: **1S0644**
- releaseDate: **2021-11-08**
- generation/system: **6.1号機 / ノーマルA / 完全告知 / 技術介入あり / 25φ**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payoutRate: **97.9 / 99.8 / 101.9 / 104.1 / 106.0 / 110.0%**
- BIG: **1/195 / 1/190 / 1/185 / 1/181 / 1/148 / 1/164**
- REG: **1/204 / 1/197 / 1/191 / 1/184 / 1/297 / 1/168**
- 合算: **1/99 / 1/97 / 1/94 / 1/91 / 1/99 / 1/83**
- baseGamesPer50: **約32.3G/50枚（設定1）**
- basicPayout: **BIG最大194枚 / REG最大102枚**
- normalCeiling: **非搭載**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_PUBLIC_RESET_CORE_WITH_NUMERIC_FIRST_BONUS_DATA**

### resetBehavior v0.7 — No.1443
- **設定変更**: 天井非搭載なのでゲーム数/天井RESETはNOT_APPLICABLE。設定変更後1回目のボーナスだけカモメランプ紫出現率が専用値へ上昇。
- **据え置き**: 天井・AT/CZモード引継ぎはNOT_APPLICABLE。変更後初回専用テーブルが据え置きで再発する根拠なし。
- **純電源OFF→ON**: 天井はNOT_APPLICABLE。純電断だけで変更後初回専用カモメテーブルが再セットされるかはUNVERIFIED_AFTER_RESEARCH。
- **天井/短縮**: 天井非搭載のためNO / NOT_APPLICABLE。
- **モード/状態**: AT/CZ用モードはNOT_APPLICABLE。変更後1回目ボーナスの設定示唆テーブル差のみ保存。
- **有利区間**: ノーマルボーナス主体で朝一客行動に関係する有利区間仕様なし。物差し上NOT_APPLICABLE。
- **朝一恩恵**: 変更後最初のボーナスで紫カモメランプが出やすく、設定判別情報が通常より強い。
- **変更判別**: 最初のボーナスで紫が出れば変更後専用テーブルの統計的材料。ただし紫自体は2回目以降にも出るので設定変更確定ではない。本機固有ガックンはUNVERIFIED_AFTER_RESEARCH。
- **公開朝一数値**: 紫率 設定2～6 = **10.0 / 10.5 / 11.0 / 11.5 / 12.0%**。通常2回目以降 = **2.0 / 2.1 / 2.2 / 2.3 / 2.4%**。

## 2021-11-08群 — CLOSED
1. **パチスロANEMONE 交響詩篇エウレカセブン HI-EVOLUTION — No.1439 / DONE**
2. **CCエンジェル — No.1440 / DONE**
3. **パチスロGANTZ極 THE SURVIVAL GAME — No.1441 / DONE**
4. **パチスロ戦国乙女 暁の関ヶ原-DARKNESS- — No.1442 / DONE**
5. **ハイハイシオサイ2 — No.1443 / DONE**
- 複数の2021年導入カレンダーで11/8群が上記5機に一致。追加の同日未処理機は今回の横断監査では確認されずCLOSED。

## 次回本線の再開地点
- **2021-11-09～11-21境界の最終監査 → 2021-11-22群**。
- No.1444候補: **Re:ゼロから始める異世界生活 Apex Vacation**。
- 2021-11-22群を開始する前に、メーカー別/別型式/PB/地域先行・延期/段階導入を再確認する。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 前回処理済み: `docs/real_machine_db/machines/2007-06_disc-up-alternative.md`（ディスクアップオルタナティブ）→ **PARTIAL_RESEARCH_EXHAUSTED**。
- 次回遡及QAカーソル: **`docs/real_machine_db/machines/2007-06_antonio-inoki-mo-moeru-pachislot-ki.md`（アントニオ猪木も燃えるパチスロ機）**。
- 今回は本線No.1443と2021-11-08群CLOSED監査を優先し、遡及QAカーソルは進めていない。

## GitHub保存
- No.1443追加 commit: `3a2971d7118ab2800e0646f76fa197f5cf3b47f1`
- `LATEST_HANDOFF.md`: この更新commitでmainへ反映。

## 主要出典 — 取得日 2026-09-12
### No.1443 ハイハイシオサイ2
- https://news.p-world.co.jp/articles/17449/nippon
- https://news.p-world.co.jp/articles/17601/greenbelt
- https://www.pidea.jp/articles/1629182526
- https://www.pachibee.jp/machines/lecture/221090006
- https://hazuse.com/machine/pachislot/1S0644/
- https://hisshobon.news/analyze/4580/
- https://www.slopachi-quest.com/article/haihaisiosai2-settei/
- https://chonborista.com/slot/pionia-slot/154093/
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/pioneer_slot/134/tj02.php

### 2021-11-08群 / 次回境界監査
- https://crankyseven.com/newmachine-info.htm
- https://sulocale.sulopachinews.com/archives/43927
- https://ichikatsu.com/newslot/
