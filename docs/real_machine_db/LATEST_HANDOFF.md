更新日: 2026-09-14

## 現在地点
- recordCount: **1736**
- latestRecordAdded: **LBパチスロ1000ちゃんA — No.1736**
- latestRecordAddedPath: `docs/real_machine_db/machines/2025-06-02_lb-pachislo-1000chan-a.md`
- chronologicalFrontier: **2025-06-02**
- schema: **resetBehavior v0.7**
- status: **2025-06-02_BOUNDARY_CLOSED_9_OF_9_CANONICAL_PROCESSED**

## 今回の進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前実レコードを再同期。
- INDEXは旧スナップショットのため、README規定どおりLATEST_HANDOFF + 実レコードを進捗正本として使用。
- main上でNo.1734 `スマスロニューパルサーBT`、No.1735 `翔べ！ハーレムエース` の先行追加を確認し、重複作成せず引き継いだ。
- No.1736 `LBパチスロ1000ちゃんA` を追加し、性能コア + resetBehavior v0.7を保存。
- HAZUSEほか複数の導入カレンダーで2025-06-02のパチスロ9機が一致。PB・別型式・地域先行・延期/段階導入の追加canonical候補も今回の再監査範囲では確認されず、境界をCLOSED 9/9とした。

## No.1734 — スマスロニューパルサーBT
- path: `docs/real_machine_db/machines/2025-06-02_smart-slot-new-pulsar-bt.md`
- formalModel: **LBニューパルサーBTC9**
- inspectionCode: **430949**
- releaseDate: **2025-06-02**
- settings: **1 / 2 / 5 / 6**
- payoutRate: **98.7 / 100.1 / 103.0 / 106.8%**（完全攻略100.0 / 101.5 / 104.5 / 108.3%）
- BIG: **1/366.1 / 1/346.8 / 1/332.7 / 1/312.1**
- REG: **1/366.1 / 1/346.8 / 1/332.7 / setting6 CONFLICT 1/312.1 vs 1/312.2**
- combined: **1/183.1 / 1/173.4 / 1/166.3 / 1/156.0**
- base: **約39G/50枚（設定1）**
- reset summary: 天井/通常ゲーム数モード/CZ/ATはNOT_APPLICABLE。設定変更専用恩恵はNONE_CONFIRMED_AFTER_RESEARCH。本機固有ガックン、BT中電断、有利区間直接契約はUNVERIFIED_AFTER_RESEARCH。

## No.1735 — 翔べ！ハーレムエース
- path: `docs/real_machine_db/machines/2025-06-02_tobe-harem-ace.md`
- formalModel: **LB翔べ！ハーレムエースCF**
- inspectionCode: **5S0025**
- releaseDate: **2025-06-02**
- settings: **1 / 2 / 5 / 6**
- payoutRate: **98.1 / 99.9 / 104.7 / 110.0%**（完全攻略100.2 / 102.1 / 107.1 / 112.4%）
- combined: **1/234.1 / 1/220.7 / 1/186.7 / 1/158.7**
- base: **43.0 / 43.9 / 45.1 / 46.5G/50枚**
- reset summary: 機種別比較表で **設定変更時BT RESET / 電源OFF→ON時BT CARRY_OVER** を直接確認。天井なし。開始ステージだけでは変更判別不可。本機固有ガックンと有利区間直接契約はUNVERIFIED_AFTER_RESEARCH。

## No.1736 — LBパチスロ1000ちゃんA
- path: `docs/real_machine_db/machines/2025-06-02_lb-pachislo-1000chan-a.md`
- manufacturer: **オーイズミラボ（製造） / オーイズミ（販売）**
- formalModel: **LB1000ちゃんアルファL3**
- inspectionCode: **5S0039**
- releaseDate: **2025-06-02**
- settings: **L / 1 / 2 / 5 / 6 / H**
- payoutRate: **L=UNPUBLISHED / 1=98.0% / 2=99.8% / 5=104.0% / 6=108.0% / H=108.7%**
- BIG合算: **1=1/190.0 / 2=1/182.0 / 5=1/164.3 / 6=1/152.8 / H=1/662.0**
- bonusCombined: **1=1/168.0 / 2=1/161.8 / 5=1/147.6 / 6=1/138.3 / H=1/624.2**
- 1000★BONUS: **1/1598.4（設定1/2/5/6） / H=1/13107.2**
- 突JAC: **1/16384.0（設定1/2/5/6） / H=1/65536.0**
- 1000★PARTY初当り: **設定1=1/1456.4 / 設定H=1/10922.7。設定2/5/6の個別値は高優先公開表で未確認のため転記しない。**
- base: **設定1〜6 約38.8G/50枚 / H 約7710.1G/50枚 / L=UNPUBLISHED**
- basicPayout: **BIG最大179枚 / 1000★BONUS最大99枚+BT / 突JAC最大99枚+BT / 推し♡JAC最大99枚、1000★PARTY中推し♡JAC約75%ループ**
- coreStatus: **COMPLETE_CORE_WITH_SPECIAL_SETTING_L_UNPUBLISHED**

### No.1736 resetBehavior v0.7
- 天井・通常ゲーム数モード・周期・CZ・ATは非搭載のため、ゲーム数リセット/天井短縮/朝一専用モードはNOT_APPLICABLE。
- 設定変更専用の短縮天井・高確開始・初当り優遇・ポイント優遇は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 必勝本の機種別比較表では設定変更時・電源OFF→ON時ともリールガックンは `現在調査中`。正式型式・メーカー名・シリーズ名を変えて再探索しても本機固有条件/発生率は固定できず `UNVERIFIED_AFTER_RESEARCH`。
- BT中/成立済みリアルボーナスの設定変更・据え置き・純電断契約は直接資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。他BT機の一般論から補完しない。
- 有利区間の設定変更/据え置き/純電断直接契約も `UNVERIFIED_AFTER_RESEARCH`。
- コンプリート機能による打ち止め状態は設定変更で解除される。

### No.1736 conflicts / missing
- 設定Hボーナス合算は主要複数資料の **1/624.2** をcanonical。一部後発資料に1/624.0、別資料に1/662.0がありCONFLICT保持。1/662.0は設定H BIG合算と一致するため転記混同候補。
- 設定Lの機械割/ボーナス確率/ベース: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 設定2/5/6の1000★PARTY初当り個別値: `NOT_SEPARATELY_PUBLISHED_IN_HIGH_PRIORITY_TABLE`。
- 本機固有ガックン条件/発生率、有利区間直接契約、BT特殊状態の営業跨ぎ: `UNVERIFIED_AFTER_RESEARCH`。

## 2025-06-02境界 — CLOSED 9/9
1. スマスロ デビル メイ クライ5 スタイリッシュトライブ — No.1728 DONE
2. いざ!番長 — No.1729 DONE
3. L ULTRAMAN — No.1730 DONE
4. LBプレミアムうまい棒 — No.1731 DONE
5. LBジャックポット — No.1732 DONE
6. スマスロ ギルティクラウン2 — No.1733 DONE
7. スマスロニューパルサーBT — No.1734 DONE
8. 翔べ!ハーレムエース — No.1735 DONE
9. LBパチスロ1000ちゃんA — No.1736 DONE

boundaryAudit:
- HAZUSE「2025年6月の導入機種」で6月2日のパチスロ9機を列挙。
- K-Navi、パチンコ・パチスロ.com等の別導入カレンダーでも同日群を再照合。
- 地域により入替日差があり得る旨を明記する資料も確認したが、今回の再探索で別canonical機種・PB・別型式・地域先行専用機の追加候補は確認されず、全国導入基準の本線を9機でCLOSED。

## 次回再開地点
- 最新mainを再同期しNo.1736と本handoffを確認。
- 次は **No.1737候補「L 絶対衝激～PLATONIC HEART～」— 2025-06-16**。
- HAZUSE 2025年6月導入一覧では6月16日パチスロは同機1機。処理後にPB・別型式・地域先行・延期/段階導入を再監査して2025-06-16境界をCLOSED判定する。
- 各機種は設定変更/据え置き/電源OFF→ON、ゲーム数/ポイント/天井、モード/状態、有利区間、朝一恩恵/不利、変更判別、公開朝一数値を独立管理する。
- PARTIAL/UNVERIFIEDは表記揺れ・正式型式・メーカー・シリーズ名、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間へ検索語を変え、公式・業界・主要解析・旧DB・アーカイブ/回顧資料横断後のみ確定する。

## resetBehavior 遡及QA
- 既処理確認済みカーソル: `2007-07-09_genju-haou-t.md`（幻獣覇王T）。
- 今回は本線No.1734〜1736を完了。旧レコード側QAカーソルは据え置き。
- 既存COMPLETE_COREの性能完了判定は変更しない。reset QA状態を別管理する。

## 今回の主要ソース
取得日: 2026-09-14
- HAZUSE 2025年6月導入一覧: https://hazuse.com/new-machine/202506-2/
- K-Navi 2025年6月導入カレンダー: https://p-kn.com/calendar/202506/
- パチンコ・パチスロ.com 2025新台カレンダー: https://pachinkopachisro.com/archives/58760696.html

### No.1736 LBパチスロ1000ちゃんA
- 遊技通信 新機種発表: https://www.yugitsushin.jp/news/%E3%83%9C%E3%83%BC%E3%83%8A%E3%82%B9%E3%83%88%E3%83%AA%E3%82%AC%E3%83%BC%E3%81%A7party%E3%81%A0%E3%81%81%EF%BD%9E%E2%98%86%E2%98%86%E2%98%86%E3%80%8Clb-%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD1000/
- HAZUSE: https://hazuse.com/machine/pachislot/5S0039/
- P-WORLD: https://www.p-world.co.jp/machine/database/10247
- 必勝本: https://p.hisshobon.jp/vpage/2697/2
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/oizumi_slot/59/kh01.php
