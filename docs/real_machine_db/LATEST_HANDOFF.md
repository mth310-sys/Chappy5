更新日: 2026-09-14

## 現在地点
- recordCount: **1704**
- latestRecordAdded: **L島娘 — No.1704**
- latestRecordAddedPath: `docs/real_machine_db/machines/2025-01-20_l-shimamusume.md`
- chronologicalFrontier: **2025-01-20**
- schema: **resetBehavior v0.7**
- status: **2025-01-20_GROUP_OPEN_5_OF_6_KNOWN_CANONICAL_PROCESSED**

## 今回の進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、No.1703既存レコードを再同期。
- INDEXは旧表示のためREADME規定どおりLATEST_HANDOFF + 実レコードを進捗正本として使用。
- 直前のmainはNo.1703 `Lパチスロ シン・エヴァンゲリオン` まで進行済みだったため、過去会話上の古いNo.1698候補へ戻らず、次の未処理No.1704 `L島娘` から継続。
- No.1704 `L島娘` を追加し、性能コア + resetBehavior v0.7を収録。

## No.1704 — L島娘
- path: `docs/real_machine_db/machines/2025-01-20_l-shimamusume.md`
- manufacturer: **オリンピア（製造） / 平和（販売・ブランド）**
- formalModel: **L島娘L2**
- inspectionCode: **430580**
- releaseDate: **2025-01-20**
- settings: **1 / 2 / 3 / 5 / 6**
- payoutRate: **97.9 / 99.0 / 102.9 / 107.6 / 112.0%**
- initialHit: **1/197.3 / 1/193.2 / 1/181.1 / 1/164.4 / 1/153.2**
- base: **約28.3G/50枚**
- netIncrease: **BIG連 約2.7枚/G / 花笠 約5.0枚/G**
- basicPayout: **REG約28枚 / BIG系約200枚**
- reset: **設定変更で有利区間・天井・内部モードRESET、シナリオ再抽選。上位シナリオと350G側規定Gが優遇。**
- carryOver: **据え置きは有利区間・天井・内部モードを引継ぎ。**
- powerCycle: **純電断は天井・内部状態の引継ぎを直接確認。有利区間/REGスルー/シナリオの純電断独立記述はUNVERIFIED_DIRECT。**
- ceiling: **通常最大500G+α / チャンス150G / 設定変更時は初回BIGまで最大350G短縮に高確率で期待。REG最大15スルー後の次回BIG濃厚。**
- resetDetection: **専用判別は主要解析で調査中。本機固有ガックンは再探索後もUNVERIFIED。**
- conflict: **後発単一資料の「350～395G帯約70%」は主要解析の「最大350G」と定義整合を確認できず、canonicalに採用せずCONFLICT保持。**

## 2025-01-20境界 — OPEN 5/6 known canonical
1. スマート沖スロ スターハナハナ — No.1700 DONE
2. A-SLOT+ ディスクアップ ULTRAREMIX — No.1701 DONE
3. Lにゃんこ大戦争 超神速 — No.1702 DONE
4. Lパチスロ シン・エヴァンゲリオン — No.1703 DONE
5. L島娘 — No.1704 DONE
6. 七つの魔剣が支配する — NEXT
- 6件処理後にPB・地域先行・別型式・延期/段階導入を再監査してCLOSED判定する。

## 次回再開地点
- 最新mainを再同期しNo.1704と本handoffを確認。
- **No.1705候補 `七つの魔剣が支配する` — 2025-01-20** から再開する。
- 処理後、2025-01-20境界のPB・地域先行・別型式・延期/段階導入を再監査し、追加漏れがなければCLOSED判定して次の日付群へ進む。
- 各機種は性能コア + resetBehavior v0.7を収集し、設定変更/据え置き/電源OFF→ON、天井、モード/状態、有利区間、朝一恩恵/不利、変更判別、公開朝一数値を独立管理する。
- PARTIAL/UNVERIFIEDは表記揺れ・正式型式・メーカー・シリーズ名、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間へ検索語を変え、公式・業界・主要解析・旧DB・アーカイブ/回顧資料横断後のみ確定する。

## resetBehavior 遡及QA
- 既処理確認済みカーソル: `2007-07-09_genju-haou-t.md`（幻獣覇王T）。
- 新規収集を止めず、QAリレー時に同カーソル直後の最初のresetBehavior欠損レコードを確定して遡及更新する。

## 今回の主要ソース
取得日: 2026-09-14
### L島娘
- 遊技日本 型式検定: https://yugi-nippon.com/pachinko-new-machine/post-67863/
- HAZUSE 型式/検定番号/導入日: https://hazuse.com/hd/430580-2/
- なな徹 基本数値: https://nana-press.com/kaiseki/machine/901/26311/
- なな徹 朝一・設定変更: https://nana-press.com/kaiseki/machine/901/26989/
- なな徹 リセット狙い: https://nana-press.com/kaiseki/machine/901/26987/
- なな徹 天井: https://nana-press.com/kaiseki/machine/901/26986/
- 1geki 基本数値: https://1geki.jp/slot/l_shimamusume/
- 1geki 天井/朝一: https://1geki.jp/slot/l_shimamusume/3/
- ちょんぼりすた 朝一電源比較: https://chonborista.com/slot/orinpia-slot/227902/
- 必勝本 モード: https://hisshobon.com/machineinfo/85822/
- パチマガスロマガ 機種概要: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/157/kh01.php
- 後発単一資料（CONFLICT参照）: https://slobase.jp/articles/shima-musume-reset
