更新日: 2026-09-14

## 現在地点
- recordCount: **1743**
- latestRecordAdded: **パチスロなめ猫～液晶ないけどなめんじゃねぇ～ — No.1743**
- latestRecordAddedPath: `docs/real_machine_db/machines/2025-08-04_pachislot-nameneko.md`
- chronologicalFrontier: **2025-08-04**
- schema: **resetBehavior v0.7**
- status: **2025-08-04_GROUP_OPEN_1_OF_6_CANONICAL_PROCESSED**

## 今回の進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前No.1742実レコードを再同期。
- INDEXは旧スナップショットのため、README規定どおりLATEST_HANDOFF + 実レコードを進捗正本として使用。
- No.1743 `パチスロなめ猫～液晶ないけどなめんじゃねぇ～` を追加し、性能コア + resetBehavior v0.7を保存。
- 2025-08-04群は1geki新台スケジュールでパチスロ6機を再確認し、1/6処理済みとしてOPEN。
- 既存COMPLETE_COREの性能完了判定は変更していない。

## No.1743 — パチスロなめ猫～液晶ないけどなめんじゃねぇ～
- path: `docs/real_machine_db/machines/2025-08-04_pachislot-nameneko.md`
- manufacturer: **ネオス**
- salesBrand: **ボーダー**
- formalModel: **Sパチスロなめ猫QQ**
- inspectionCode: **4S1920**
- releaseDate: **2025-08-04**
- settings: **1 / 2 / 4 / 5 / 6**
- payoutRate: **98.0 / 100.3 / 102.6 / 104.6 / 108.1%**
- bonusInitial: **全設定共通 1/155**
- BIG initial: **1/724 / 1/666 / 1/610 / 1/569 / 1/507**
- base: **約35.8G/50枚（設定1）**
- netIncrease: **約2.9枚/G**
- basicPayout: **BIG約200枚 / REG約60枚 / 初当りBIGは3回保証で約600枚**
- normalCeiling: **最大600G+α**（100G / 300G / 600G振り分けあり）
- coreStatus: **COMPLETE_CORE_WITH_RESET_RESEARCH**

### No.1743 resetBehavior v0.7
- 設定変更時は天井ゲーム数・内部状態をRESET。
- 電源OFF→ON時は天井ゲーム数・内部状態をCARRY_OVER。
- 据え置きは純電断比較表から主要進行要素CARRY_OVERとして扱うが、据え置きだけを独立行で明記した高優先資料は未固定のため信頼度を一段下げた。
- 通常天井は最大600G+α。設定変更後の固定短縮天井は確認できず、resetCeilingも最大600G+αとして管理。
- 設定変更時はBB高確率状態から開始する可能性あり。ただし具体率は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 本機固有の有利区間RESET/CARRY_OVER契約は高優先資料で直接固定できず `UNVERIFIED_AFTER_RESEARCH`。一般6号機仕様からは補完していない。
- 液晶非搭載のため液晶開始ステージ判別はNOT_APPLICABLE。本機固有ガックン条件・発生率、ランプによる設定変更確定判別は再探索後もUNVERIFIED。
- 公開朝一数値は通常/リセット天井600G+α以外に固定できる確率値なし。

## conflicts / source normalization
- 媒体のメーカー欄は `ネオス` / `ボーダー` が混在するが、Amusement Japanが「ボーダー発表・ネオス製」と報道しているため、製造=ネオス、販売/ブランド=ボーダーとして分離。性能競合とは扱わない。
- 一部後発二次サイトに天井非搭載の誤記が混在するが、HAZUSE・一撃・必勝本・複数解析で最大600G天井が一致するため、canonicalは最大600G+α。

## 2025-08-04境界 — OPEN 1/6 canonical
1. パチスロなめ猫～液晶ないけどなめんじゃねぇ～ — No.1743 DONE
2. マタドールIII — NEXT
3. パチスロ 転生したら剣でした — QUEUED
4. L アズールレーン THE ANIMATION — QUEUED（2025-07-23京楽直営店フィールドテスト先行導入注記）
5. L ダーリン・イン・ザ・フランキス — QUEUED
6. L咲-Saki-頂上決戦 — QUEUED

boundaryAudit:
- 1geki 2025年8月新台スケジュールは2025-08-04にパチスロ6機を掲載し、上記6機と一致。
- Slot Calendarも2025-08-04予定として同6機を掲載。
- 情報島の過去新台一覧はなめ猫を当日一覧から欠落させる版があり、1geki/Slot Calendar/機種固有導入日と照合して6機canonicalを維持。
- 6機処理後にPB・別型式・地域先行・延期/段階導入を再監査しCLOSED判定する。

## resetBehavior 遡及QA
- 既処理確認済みカーソル: `2007-07-09_genju-haou-t.md`（幻獣覇王T）。
- 今回はGitHub code search、recursive tree参照、2007年7月導入資料の再探索を行ったが、カーソル直後の既存レコードを実体順で安全に一意確定できなかったため旧レコードは更新していない。
- 2007年7月にはマーベルヒーローズ、北斗の拳2、マジカルハロウィン、新世紀エヴァンゲリオン～まごころを、君に～等が存在するが、外部導入順からGitHub内部の次レコードを推測しない。
- 既存COMPLETE_COREの性能完了判定は変更せず、reset QA状態は別管理を継続。
- retroQaStatus: **CURSOR_HELD_UNTIL_NEXT_EXISTING_RECORD_CAN_BE_UNIQUELY_RESOLVED**

## 次回再開地点
- 最新mainを再同期しNo.1743と本handoffを確認。
- **No.1744候補「マタドールIII」— 2025-08-04** から本線を継続する。
- 性能コアに加え、設定変更/据え置き/電源OFF→ON、ゲーム数/天井、モード/状態、有利区間、朝一恩恵/不利、変更判別、公開朝一数値を独立管理する。
- PARTIAL/UNVERIFIEDは正式型式・検定番号・メーカー・シリーズ名、リセット/朝一/据え置き/電源OFF ON/ガックン/有利区間へ検索語と資料系統を変えて再探索する。
- 遡及QAは `2007-07-09_genju-haou-t.md` 直後の「既存実レコード」をGit tree/pathで一意確定できた時点から再開する。

## 今回の主要ソース
取得日: 2026-09-14

### No.1743 パチスロなめ猫
- HAZUSE 機種詳細: https://hazuse.com/hd/4s1920/
- HAZUSE 基本スペック: https://hazuse.com/machine/pachislot/4S1920/genre/201/
- 一撃 オンライン遊技説明: https://1geki.jp/slot/s_nameneko/39/
- 一撃 天井・朝一設定変更: https://1geki.jp/slot/s_nameneko/3/
- 一撃 BIG/REG: https://1geki.jp/slot/s_nameneko/61/
- 一撃 JACKPOT: https://1geki.jp/slot/s_nameneko/63/
- 必勝本 通常時解説: https://hisshobon.com/machineinfo/87422/
- 必勝本 ボーナス解説: https://hisshobon.com/machineinfo/87424/
- Amusement Japan 発表記事: https://amusement-japan.co.jp/article/detail/10004838/
- パチビー: https://www.pachibee.jp/machines/index/225070005
- ちょんぼりすた: https://chonborista.com/slot/border/237458/
- 情報島: https://p-johojima.jp/machine_spec/post-7004/

### 境界監査
- 1geki 2025年8月新台スケジュール: https://1geki.jp/newmachinecalender/202508/
- Slot Calendar 2025-08-04: https://sulocale.sulopachinews.com/archives/%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88/8%E6%9C%884%E6%97%A5%E5%B0%8E%E5%85%A5%E9%96%8B%E5%A7%8B%E4%BA%88%E5%AE%9A%E6%A9%9F%E7%A8%AE
- 情報島 過去新台一覧: https://p-johojima.jp/machine_spec/post-2074/

### 遡及QA補助
- 2007年回顧年表: https://www.dorubako.biz/year/2007.html
- P-WORLD/グリーンべると 幻獣覇王・ハワイっ娘発表: https://news.p-world.co.jp/articles/2207/greenbelt
