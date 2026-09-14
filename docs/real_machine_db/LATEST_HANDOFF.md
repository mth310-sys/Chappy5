更新日: 2026-09-15

## 現在地点
- recordCount: **1791**
- latestRecordAdded: **アニマルスロット ドッチ — No.1791**
- latestRecordAddedPath: `docs/real_machine_db/machines/2026-04-20_animal-slot-dotchi.md`
- chronologicalFrontier: **2026-04-20**
- schema: **resetBehavior v0.7**
- status: **2026-04-20_BOUNDARY_OPEN_2_OF_3_CANONICAL_PROCESSED**

## 今回の進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前実レコードNo.1790を再同期。
- INDEXは旧スナップショット（19件）のため、README規定どおり `LATEST_HANDOFF + 実レコード` を進捗正本として使用。
- No.1790まで完了済みを確認し、次の未処理No.1791候補 `アニマルスロット ドッチ` から継続。
- No.1791を追加し、性能コアとresetBehavior v0.7を同時収集。
- 北電子公式で2026年4月製品として確認。遊技通信/P-WORLDで型式 `LアニマルスロットドッチZT`、ゼクロスクリエイティブ製を確認。1gekiで検定番号 `530564`、導入開始日2026-04-20を確認。
- 設定1〜6。機械割97.6/98.7/100.4/103.5/107.5/108.2%。BB 1/329.7〜1/227.4、RB 1/349.5〜1/314.3、合算1/169.4〜1/131.9。
- ベース約33G/50枚。BIG純増約2.5枚/G、REG/JUNGLE BONUS純増約5.5枚/G。
- 通常天井はBIG/ST後999G、REG後499G。設定変更後は499Gへ短縮し、天井到達時はBIG当選。
- なな徹で設定変更時の有利区間RESETを確認。設定変更以外の有利区間リセット恩恵は調査中。
- 据え置き/純電源OFF→ONの天井・内部状態引継ぎは二次資料で支持されるが、1geki/なな徹/パチマガ系の機種固有直接比較表を固定できなかったため `SECONDARY_SUPPORTED` に抑制。
- 設定変更時の内部状態具体振り分け、開始ステージ高優先直接根拠、据え置き/電断時の有利区間直接文言、ガックン条件/発生率は再探索後もUNVERIFIED。
- REG獲得枚数は業界発表約65枚、パチビー約56枚で差があり、平均せず `CONFLICT_OR_DEFINITION_DIFFERENCE_56_VS_65` として保持。

## No.1791 — アニマルスロット ドッチ
- path: `docs/real_machine_db/machines/2026-04-20_animal-slot-dotchi.md`
- manufacturer: **北電子**
- manufacturingEntity: **ゼクロスクリエイティブ**
- formalModel: **LアニマルスロットドッチZT**
- inspectionCode: **530564**
- releaseDate: **2026-04-20**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- payoutRate: **97.6 / 98.7 / 100.4 / 103.5 / 107.5 / 108.2%**
- bonus combined: **1/169.4 / 1/163.8 / 1/157.8 / 1/149.3 / 1/140.2 / 1/131.9**
- base: **約33G/50枚**
- netIncrease: **約2.5枚/G or 約5.5枚/G**
- coreStatus: **COMPLETE_CORE_WITH_RESET_RESEARCH**

### No.1791 resetBehavior v0.7
- 設定変更: ボーナス間天井を499Gへ短縮。有利区間RESET。
- 据え置き: 天井ゲーム数引継ぎは二次資料支持。内部状態引継ぎはSECONDARY_SUPPORTED。
- 純電源OFF→ON: 天井・内部状態引継ぎは二次資料支持。有利区間直接文言はUNVERIFIED。
- ゲーム数・天井: BIG/ST後999G、REG後499G、設定変更後499G。ジャングルボーナス間2500G天井も存在。
- モード・状態: 通常/高確/超高確が存在するが、朝一具体振り分けはUNVERIFIED。
- 有利区間: 設定変更RESET。設定変更以外のリセット恩恵は解析上調査中。
- 朝一恩恵: BIG後通常天井と比べ最大500G短縮。到達時BIG当選。
- 朝一不利: 固定公開ペナルティなし。
- 変更判別: 499G天井短縮が事後的材料。本機固有ガックン/表示/ランプ確定判別はUNVERIFIED。
- 公開朝一数値: resetCeiling=499G。

## conflicts / normalization
- REG基本獲得は約65枚（業界発表）と約56枚（パチビー）の差をCONFLICT/定義差候補として保持。
- 主要性能コア、天井、導入日、型式、検定番号には重大CONFLICTなし。
- 電断/据え置き内部契約は低優先二次資料の記載を高優先根拠と同格にしない。

## resetBehavior retrospective QA
- qaStatus: **CURSOR_UNRESOLVED_ON_CURRENT_MAIN_SEARCH**
- 過去カーソル `2007-07-09_genju-haou-t.md` / `幻獣覇王T` をGitHub code searchで再探索したが、現mainで一致する実体を取得できず。
- 実体を安全に一意固定できるまで外部導入順から推測補完しない。
- 既存 `COMPLETE_CORE` の性能完了判定は変更していない。
- reset QA状態は性能コア本線の時系列進行と分離する。

## sources summary
retrievedAt: 2026-09-15
No.1791:
- 北電子公式: https://www1.kitadenshi.co.jp/fun/
- 遊技通信/P-WORLD: https://news.p-world.co.jp/articles/32770/yugitsushin
- グリーンべると: https://web-greenbelt.jp/post-108944/
- 1geki: https://1geki.jp/slot/l_asd/
- 1geki 天井/朝一: https://1geki.jp/slot/l_asd/3/
- なな徹: https://nana-press.com/kaiseki/machine/1126/
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kitac_slot/131/kh01.php
- パチビー: https://www.pachibee.jp/machines/index/226030008
- 6確: https://www.kaku6.jp/slot/asd/
- スロベース: https://slobase.jp/machines/dotchi

## 2026-04-20 canonical queue — OPEN 2/3
1. ~~スマスロ ミリオンゴッド-神々の軌跡- — No.1790 DONE~~
2. ~~アニマルスロット ドッチ — No.1791 DONE~~
3. **Lパチスロ 機動戦士ガンダムユニコーン 覚醒DRIVE — candidate No.1792**

## 次回再開地点
- 最新mainを再同期しNo.1791と本handoffを確認。
- **No.1792候補「Lパチスロ 機動戦士ガンダムユニコーン 覚醒DRIVE」— 2026-04-20** から継続。
- 処理後、PB・別型式・地域先行・延期/段階導入を再監査して2026-04-20境界をCLOSED判定する。
- PARTIAL/UNVERIFIEDは、型式名・検定番号・メーカー・シリーズ名と、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間へ検索語を変え、公式・業界記事・解析・古いDB・アーカイブを横断してから確定する。