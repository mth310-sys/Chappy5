更新日: 2026-09-14

## 現在地点
- recordCount: **1745**
- latestRecordAdded: **パチスロ 転生したら剣でした — No.1745**
- latestRecordAddedPath: `docs/real_machine_db/machines/2025-08-04_pachislot-tensei-shitara-ken-deshita.md`
- chronologicalFrontier: **2025-08-04**
- schema: **resetBehavior v0.7**
- status: **2025-08-04_GROUP_OPEN_3_OF_6_CANONICAL_PROCESSED**

## 今回の進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前No.1744実レコードを再同期。
- INDEXは旧スナップショットのため、README規定どおりLATEST_HANDOFF + 実レコードを進捗正本として使用。
- No.1745 `パチスロ 転生したら剣でした` を追加し、性能コア + resetBehavior v0.7を保存。
- 2025-08-04群はcanonical 6機のうち3/6処理済みとしてOPENを維持。
- 既存COMPLETE_COREの性能完了判定は変更していない。

## No.1745 — パチスロ 転生したら剣でした
- path: `docs/real_machine_db/machines/2025-08-04_pachislot-tensei-shitara-ken-deshita.md`
- manufacturer: **グレードワン**
- salesBrand: **コナミアミューズメント**
- formalModel: **L転生したら剣でしたGT**
- inspectionCode: **5S0141**
- releaseDate: **2025-08-04**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payoutRate: **97.9 / 99.0 / 101.2 / 105.7 / 109.1 / 112.1%**
- CZ: **1/215.8 / 1/214.2 / 1/211.0 / 1/204.8 / 1/201.2 / 1/197.8**
- bonus: **1/398.6 / 1/388.7 / 1/380.8 / 1/352.0 / 1/335.0 / 1/316.8**
- AT: **1/403.8 / 1/396.0 / 1/373.4 / 1/340.7 / 1/325.9 / 1/312.8**
- base: **約33.3G/50枚**
- netIncrease: **転剣RUSH約2.4枚/G / 擬似ボーナス系約4.5枚/G**
- basicPayout: **フランBONUS約80枚 / X転剣BONUS約80枚 / 転剣RUSH初期50〜200G**
- normalAtCeiling: **最大970G+α**
- normalBonusCeiling: **最大1280G+α**
- coreStatus: **COMPLETE_CORE_WITH_RESET_RESEARCH**

### No.1745 resetBehavior v0.7
- 設定変更で有利区間・AT間天井・ボーナス間天井・内部状態・魔石・モードをRESET。据え置きでは同項目をCARRY_OVER。
- AT間天井は最大970G+α→600G+α、ボーナス間天井は最大1280G+α→980G+αへ短縮。
- 設定1の変更時モード振り分けはモードB 40.0% / モードC 40.0% / 天国20.0%。モードAは否定。設定2以上の具体振り分けは公開値未固定。
- 変更後ボーナス間天井候補は200G+α / 500G+α / 980G+α。
- 純電源OFF→ONは機種別二次解析で天井・内部状態CARRY_OVERを確認。ただし有利区間・魔石・モードまでを純電断条件だけで独立比較する高優先資料は未固定。
- 朝一からX転剣BONUS 0回の場合、ATモード2選択率はAT2回目約7%（設定1）、3回目約30%・5回目約30%（全設定共通）。朝一行動説明用の補助値として保持。
- 朝一600GでAT間天井非発動、またはボーナス間980Gでボーナス間天井非発動なら据え置き濃厚材料。
- ガックンは一部二次解析に「対策なしなら設定変更後1G目有効」の直接記載あり。ただし別系統高優先資料で同条件を照合できず `ANALYSIS_SINGLE_GAKKUN` とした。
- 設定変更時以外の有利区間リセット後恩恵は設定変更時を除外する旨が公開されているため、朝一恩恵には転記していない。

## conflicts / source normalization
- 一部後発二次サイトに設定3機械割 `101.0%` の記載があるが、一撃・必勝本・パチマガスロマガ等は `101.2%` で一致。`101.0%` は `CONFLICT_MINOR_SECONDARY` として隔離しcanonicalは101.2%。
- メーカー表記は「コナミアミューズメント」と「グレードワン」が混在するが、コナミ公式が製造元=グレードワンと明記するため manufacturer=グレードワン / salesBrand=コナミアミューズメントとして分離。

## 2025-08-04境界 — OPEN 3/6 canonical
1. パチスロなめ猫～液晶ないけどなめんじゃねぇ～ — No.1743 DONE
2. マタドールIII — No.1744 DONE
3. パチスロ 転生したら剣でした — No.1745 DONE
4. L アズールレーン THE ANIMATION — NEXT（2025-07-23京楽直営店フィールドテスト先行導入注記）
5. L ダーリン・イン・ザ・フランキス — QUEUED
6. L咲-Saki-頂上決戦 — QUEUED

boundaryAudit:
- 1geki 2025年8月新台スケジュールは2025-08-04にパチスロ6機を掲載し、上記6機と一致。
- Slot Calendarも2025-08-04予定として同6機を掲載。
- 情報島の過去新台一覧はなめ猫を当日一覧から欠落させる版があり、1geki/Slot Calendar/機種固有導入日と照合して6機canonicalを維持。
- 6機処理後にPB・別型式・地域先行・延期/段階導入を再監査しCLOSED判定する。

## resetBehavior 遡及QA
- 既処理確認済みカーソル: `2007-07-09_genju-haou-t.md`（幻獣覇王T）。
- カーソル直後の既存実レコードをGit tree/pathで安全に一意確定できるまで遡及QAカーソルは保持する。
- 外部導入順からGitHub内部の次レコードを推測しない。
- 既存COMPLETE_COREの性能完了判定は変更せず、reset QA状態は別管理を継続。
- retroQaStatus: **CURSOR_HELD_UNTIL_NEXT_EXISTING_RECORD_CAN_BE_UNIQUELY_RESOLVED**

## 次回再開地点
- 最新mainを再同期しNo.1745と本handoffを確認。
- **No.1746候補「L アズールレーン THE ANIMATION」— 2025-08-04** から本線を継続する。
- 2025-07-23の京楽直営店フィールドテスト先行導入と全国導入2025-08-04を混同せず両方注記する。
- 性能コアに加え、設定変更/据え置き/電源OFF→ON、ゲーム数/天井、モード/状態、有利区間、朝一恩恵/不利、変更判別、公開朝一数値を独立管理する。
- PARTIAL/UNVERIFIEDは正式型式・検定番号・メーカー・シリーズ名、リセット/朝一/据え置き/電源OFF ON/ガックン/有利区間へ検索語と資料系統を変えて再探索する。
- 遡及QAは `2007-07-09_genju-haou-t.md` 直後の「既存実レコード」をGit tree/pathで一意確定できた時点から再開する。

## 今回の主要ソース
取得日: 2026-09-14

### No.1745 パチスロ 転生したら剣でした
- コナミアミューズメント公式 製品サイト: https://www.konami.com/amusement/psm/slot/tenken-anime/
- コナミアミューズメント公式 発売発表: https://www.konami.com/amusement/corporate/ja/topics/20250526/
- コナミアミューズメント公式 稼働開始案内: https://www.konami.com/amusement/corporate/ja/topics/20250729tk/
- HAZUSE: https://hazuse.com/hd/5s0141/
- P-WORLD/グリーンべると 検定通過: https://news.p-world.co.jp/articles/30688/greenbelt
- 一撃 機種トップ: https://1geki.jp/slot/l_tenken/
- 一撃 天井・朝一: https://1geki.jp/slot/l_tenken/3/
- 一撃 モード: https://1geki.jp/slot/l_tenken/47/
- 一撃 ベース: https://1geki.jp/slot/l_tenken/4/
- なな徹 設定変更・朝一・据え置き・有利区間: https://nana-press.com/kaiseki/machine/996/31122/
- 必勝本 基本スペック: https://p.hisshobon.jp/machine/4548/1/110085
- 必勝本 CZ/ボーナス/AT確率: https://hisshobon.com/machineinfo/87551/
- 必勝本 モード: https://hisshobon.com/machineinfo/87559/
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/konami_slot/31/kh02.php
- P-WORLD 機種DB: https://www.p-world.co.jp/machine/database/10308
- パチビー: https://www.pachibee.jp/machines/index/225070004
- kaku6（純電断・ガックン単一二次資料）: https://www.kaku6.jp/slot/tenken/

### 境界監査（前リレーから継承）
- 1geki 2025年8月新台スケジュール: https://1geki.jp/newmachinecalender/202508/
- Slot Calendar 2025-08-04: https://sulocale.sulopachinews.com/archives/%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88/8%E6%9C%884%E6%97%A5%E5%B0%8E%E5%85%A5%E9%96%8B%E5%A7%8B%E4%BA%88%E5%AE%9A%E6%A9%9F%E7%A8%AE
- 情報島 過去新台一覧: https://p-johojima.jp/machine_spec/post-2074/
