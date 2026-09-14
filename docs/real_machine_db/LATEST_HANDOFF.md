更新日: 2026-09-14

## 現在地点
- recordCount: **1736**
- latestRecordAdded: **LBパチスロ1000ちゃんA — No.1736**
- latestRecordAddedPath: `docs/real_machine_db/machines/2025-06-02_lb-pachislot-1000chan-a.md`
- chronologicalFrontier: **2025-06-02**
- schema: **resetBehavior v0.7**
- status: **2025-06-02_BOUNDARY_CLOSED_9_OF_9_CANONICAL_PROCESSED**

## 今回の進捗
- 最新mainの `README.md`、ミッションv0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前実レコードNo.1733 `スマスロ ギルティクラウン2` を再同期。
- INDEXは完了済み19件時点の旧スナップショットのため、README規定どおり `LATEST_HANDOFF + 実レコード` を進捗正本として使用。
- 既存No.1728〜1733をやり直さず、次の未処理No.1734から継続。
- No.1734 `スマスロニューパルサーBT`、No.1735 `翔べ！ハーレムエース`、No.1736 `LBパチスロ1000ちゃんA` を追加し、性能コア + resetBehavior v0.7を保存。
- HAZUSE 2025年6月導入一覧、情報島の6月2日新台9機レビュー、BT第一陣の日工組・日電協発表、別導入一覧を再照合し、2025-06-02群はパチスロ9機で一致。PB・別型式・地域先行・延期/段階導入候補も今回の確認範囲で追加なしのため境界をCLOSED。

## No.1734 — スマスロニューパルサーBT
- path: `docs/real_machine_db/machines/2025-06-02_smart-slot-new-pulsar-bt.md`
- manufacturer: **山佐（製造） / 山佐ネクスト（販売）**
- formalModel: **LBニューパルサーBTC9**
- inspectionCode: **430949**
- releaseDate: **2025-06-02**
- settings: **1 / 2 / 5 / 6**
- payoutRate: **98.7 / 100.1 / 103.0 / 106.8%**（完全攻略100.0 / 101.5 / 104.5 / 108.3%）
- BIG: **1/366.1 / 1/346.8 / 1/332.7 / 1/312.1**
- REG: **1/366.1 / 1/346.8 / 1/332.7 / setting6 CONFLICT 1/312.1 vs 1/312.2**
- combined: **1/183.1 / 1/173.4 / 1/166.3 / 1/156.0**
- base: **約39G/50枚（設定1）**
- basicPayout: **BIG最大203枚+必ずBT / REG最大107枚 / BIG初当りからBT込み設定1平均約359枚**
- coreStatus: **COMPLETE_CORE**

### No.1734 resetBehavior v0.7
- 天井非搭載・通常ゲーム数モード/CZ/ATなしのため、天井短縮・ゲーム数リセット・朝一モードはNOT_APPLICABLE。
- 設定変更専用の短縮天井/高確/初当り優遇等は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 必勝本の設定変更/電源OFF→ON比較ではリールガックンは双方 `現在調査中`。型式・メーカー・シリーズ名を含めた再探索でも固有条件/発生率を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- BT中の営業跨ぎ/純電断の直接仕様、有利区間の設定変更/据え置き/純電断契約は十分な再探索後も直接資料を固定できず推測しない。
- 設定6 REGは `1/312.1 vs 1/312.2` を平均せずCONFLICT保持。

## No.1735 — 翔べ！ハーレムエース
- path: `docs/real_machine_db/machines/2025-06-02_tobe-harem-ace.md`
- manufacturer: **カルミナ（製造） / ネット（販売）**
- formalModel: **LB翔べ！ハーレムエースCF**
- inspectionCode: **5S0025**
- releaseDate: **2025-06-02**
- settings: **1 / 2 / 5 / 6**
- payoutRate: **98.1 / 99.9 / 104.7 / 110.0%**（完全攻略100.2 / 102.1 / 107.1 / 112.4%）
- HaremBonus: **1/819.2 / 1/744.7 / 1/590.4 / 1/492.8**
- BIG以上合算: **1/402.1 / 1/390.1 / 1/343.1 / 1/307.7**
- REG: **1/560.1 / 1/508.0 / 1/409.6 / 1/327.7**
- bonusCombined: **1/234.1 / 1/220.7 / 1/186.7 / 1/158.7**
- base: **43.0 / 43.9 / 45.1 / 46.5G/50枚**
- basicPayout: **ハーレムBONUS最大279枚+BT / BIG最大239枚 / REG最大107枚**
- coreStatus: **COMPLETE_CORE**

### No.1735 resetBehavior v0.7
- 必勝本の機種別比較表で **設定変更時BT RESET / 電源OFF→ON時BT CARRY_OVER** を直接確認。
- 設定変更・純電断とも開始ステージは実戦上「飛行ステージ」で、ステージ単独判別不可。
- 天井非搭載のためゲーム数/天井短縮はNOT_APPLICABLE。
- 設定変更専用の朝一当選率優遇等は `NONE_CONFIRMED_AFTER_RESEARCH`。
- BT残存時に設定変更すると状態が消失するため、純電断/据え置きのBT引継ぎと比較した明確なresetPenaltyとして保存。
- 本機固有ガックン条件/発生率と有利区間直接契約は再探索後も `UNVERIFIED_AFTER_RESEARCH`。

## No.1736 — LBパチスロ1000ちゃんA
- path: `docs/real_machine_db/machines/2025-06-02_lb-pachislot-1000chan-a.md`
- manufacturer: **オーイズミ**
- formalModel: **LB1000ちゃんアルファL3**
- inspectionCode: **5S0039**
- releaseDate: **2025-06-02**
- settings: **L / 1 / 2 / 5 / 6 / H**
- payoutRate: **設定1/2/5/6 = 98.0 / 99.8 / 104.0 / 108.0%、設定H = 108.7%、設定Lは公開数値なし**
- BIG: **設定1/2/5/6 = 1/190.0 / 1/182.0 / 1/164.3 / 1/152.8、設定H = 1/662.0**
- bonusCombined: **1/168.0 / 1/161.8 / 1/147.6 / 1/138.3、設定H = 1/624.2**
- 1000PARTY初当り: **設定1〜6 1/1456.4、設定H 1/10922.7**
- base: **設定1〜6 約38.8G/50枚、設定H 約7710.1G/50枚**
- basicPayout: **BIG最大179枚 / 1000☆BONUS最大99枚+BT / 推しJAC最大99枚、1000PARTY中推しJAC約75%ループ**
- coreStatus: **COMPLETE_CORE**

### No.1736 resetBehavior v0.7
- 天井非搭載のためゲーム数/天井短縮はNOT_APPLICABLE。
- 必勝本の設定変更/電源OFF→ON比較表でリールガックンは双方 `現在調査中`。
- 設定変更専用の短縮天井/朝一モード/高確開始/初当り優遇は `NONE_CONFIRMED_AFTER_RESEARCH`。
- BT中の設定変更/純電断/営業跨ぎの直接挙動、有利区間の直接契約は表記揺れ・正式型式・メーカー・シリーズ名を含めて再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。一般論から補完しない。
- 設定Hは特殊設定で、50枚あたり約7710.1G、ボーナス合算1/624.2、機械割108.7%。設定Lは搭載確認済みだが具体性能は非公表/調査中のため推測しない。

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
- HAZUSE「2025年6月の導入機種」で6月2日パチスロ9機を列挙。
- 情報島の6月2日導入後レビューも「パチスロ新台9機種」と明記。
- 別導入カレンダーでも同9機が一致。
- 日工組・日電協発表のBT第一陣4機（1000ちゃんA / プレミアムうまい棒 / 翔べ!ハーレムエース / ニューパルサーBT）も同日群と整合。
- 今回の追加監査で同日PB・別型式・地域先行・延期/段階導入の追加canonical候補は確認されず、CLOSED判定。

## 次回再開地点
- 最新mainを再同期しNo.1736と本handoffを確認。
- 次は **No.1737候補「L 絶対衝激～PLATONIC HEART～」— 2025-06-16**。
- HAZUSE 2025年6月導入一覧および情報島の6月16日新台記事では、6月16日導入予定のパチスロは同機1機で一致。
- No.1737処理後、PB・別型式・地域先行・延期/段階導入を監査して2025-06-16境界をCLOSED判定する。
- 各機種は設定変更/据え置き/電源OFF→ON、ゲーム数/ポイント/天井、モード/状態、有利区間、朝一恩恵/不利、変更判別、公開朝一数値を独立管理する。
- PARTIAL/UNVERIFIEDは表記揺れ・正式型式・メーカー・シリーズ名、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間へ検索語を変え、公式・業界・主要解析・旧DB・アーカイブ/回顧資料横断後のみ確定する。

## resetBehavior 遡及QA
- 既処理確認済みカーソル: `2007-07-09_genju-haou-t.md`（幻獣覇王T）。
- 今回は本線No.1734〜1736を完了。旧レコード側QAカーソルは据え置き。
- 既存COMPLETE_COREの性能完了判定は変更しない。reset QA状態を別管理する。

## 今回の主要ソース
取得日: 2026-09-14

### No.1734 スマスロニューパルサーBT
- 遊技日本 検定通過: https://yugi-nippon.com/pachinko-new-machine/post-70689/
- 情報島 検定通過: https://p-johojima.jp/new_machine/post-4992/
- 日刊スポーツ 新機種発表: https://www.nikkansports.com/amusement/pachislot/news/202503270001227.html
- Amusement Japan: https://amusement-japan.co.jp/article/detail/10004792/
- P-WORLD: https://www.p-world.co.jp/machine/database/10254
- 必勝本: https://p.hisshobon.jp/vpage/2700/2
- なな徹: https://nana-press.com/kaiseki/machine/960/28919/
- 1geki: https://1geki.jp/slot/lb_newpulsar/39/

### No.1735 翔べ！ハーレムエース
- ネット公式: https://www.net-fun.co.jp/product
- 遊技日本: https://yugi-nippon.com/pachinko-new-machine/post-70185/
- P-WORLD/遊技通信: https://news.p-world.co.jp/articles/30552
- 情報島 検定通過: https://p-johojima.jp/news/post-780/
- Ativo: https://ativo.jp/2025/03/25/lb%E7%BF%94%E3%81%B9%E3%83%8F%E3%83%BC%E3%83%AC%E3%83%A0%E3%82%A8%E3%83%BC%E3%82%B9/
- 必勝本 天井&設定変更: https://hisshobon.com/machineinfo/86867/
- 必勝本 基本: https://hisshobon.com/machineinfo/86850/

### No.1736 LBパチスロ1000ちゃんA
- オーイズミ公式: https://www.oizumi.co.jp/machine/1000chan_a/
- HAZUSE: https://hazuse.com/machine/pachislot/5S0039/
- 情報島 BT第一陣: https://p-johojima.jp/news/post-852/
- 必勝本: https://p.hisshobon.jp/vpage/2697/2
- 必勝本 設定H: https://hisshobon.com/machineinfo/86792/
- 1geki: https://1geki.jp/slot/lb_1000chan/

### 境界監査 / 次群
- HAZUSE 2025年6月導入一覧: https://hazuse.com/new-machine/202506-2/
- 情報島 6月2日パチスロ新台9機レビュー: https://p-johojima.jp/colum/post-9065/
- 情報島 6月16日導入予定: https://p-johojima.jp/colum/post-9294/
