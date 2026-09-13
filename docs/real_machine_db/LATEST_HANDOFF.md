更新日: 2026-09-14

## 現在地点
- recordCount: **1632**
- latestRecordAdded: **チバリヨ2 — No.1632**
- latestRecordAddedPath: `docs/real_machine_db/machines/2024-03-04_chibariyo2.md`
- chronologicalFrontier: **2024-03-04**
- frontierLatestMachine: **チバリヨ2 — No.1632**
- schema: **resetBehavior v0.7**
- status: **2024-03-04_GROUP_OPEN_4_OF_5_CANONICAL_PROCESSED**

## 今回の同期 / 進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前No.1631 `キングクリエーター30` を確認して開始。
- INDEXは旧版表示のためREADME規定どおりLATEST_HANDOFF + main実レコードを進捗正本として採用。
- mainは会話上のNo.1626より進んでおり、2024-03-04群No.1631まで処理済みだったため既存値をやり直さずNo.1632から継続。
- No.1632 `チバリヨ2` を性能コア + resetBehavior v0.7で追加。

## No.1632 — チバリヨ2
- path: `docs/real_machine_db/machines/2024-03-04_chibariyo2.md`
- manufacturer: **オーゼキ（製造） / ネット（販売・ブランド）**
- formalModel: **Lチバリヨ2ZB**
- inspectionCode: **3S1495**
- releaseDate: **2024-03-04**（一部ホールでテストマーケティング/先行導入開始）
- generation: **6.5号機 / スマスロ**
- systemType: **AT / 擬似ボーナス / 完全告知**
- settings: **L / 1 / 2 / 4 / 5 / 6**
- 機械割（1/2/4/5/6）: **97.3 / 99.3 / 104.7 / 109.6 / 114.9%**
- 初当り: **1/328.0 / 1/314.4 / 1/281.1 / 1/263.3 / 1/224.8**
- base: **約27.9 / 28.2 / 28.7 / 29.1 / 29.8G/50枚**
- 純増: **SBB約4.5枚/G、BIG/REG約3.0枚/G**
- SBB 70G・約315枚 / BIG 70G・約210枚 / REG 30G・約90枚

### No.1632 resetBehavior v0.7
- setting change: **有利区間・ゲーム数天井・チェリー規定回数RESET、内部モード再抽選。**
- ceiling: **通常最大999G+α → 設定変更後350G or 600Gへ短縮。350/600Gの専用選択率はPUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。**
- mode: **設定変更時は約50%で通常B以上。設定変更専用の完全モード振り分けはPUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。**
- carry over / power OFF→ON: **ゲーム数天井・チェリー規定回数・内部モード・有利区間CARRY_OVER。**
- morning benefit: **最大600Gへの天井短縮 + 約50%で通常B以上。**
- reset detection: **有利区間ランプでは判別不可。朝一600G+α超え非当選は据え置き推測材料。本機固有ガックン条件/発生率はUNVERIFIED_AFTER_RESEARCH。**
- 独立internal state: 通常A/B等の内部モードとは別建ての状態定義を高信頼資料で固定できず **UNVERIFIED_AFTER_RESEARCH**。
- resetQaStatus: **COMPLETE_RESEARCHED_WITH_UNVERIFIED_GACKUN_AND_RESET_CEILING_SPLIT**
- 注意: **2025年 `チバリヨ2プラス` は別型式/別機種。検索結果を本機へ流用しない。**

## 2024-03-04群 — OPEN 4/5 canonical
1. スマスロキングパルサー — No.1629 DONE
2. L南国育ち — No.1630 DONE
3. キングクリエーター30 — No.1631 DONE
4. チバリヨ2 — No.1632 DONE
5. パチスロ ガメラ2 — No.1633 NEXT

境界監査メモ:
- 2024-03-04群は複数新台カレンダー/機種DBで上記5機をcanonical候補として維持。
- `チバリヨ2` の2024-03-04はネット発表上、一部ホールでのテストマーケティング/先行導入開始。主要機種DBも同日を導入開始日としているため本線に含める。
- `パチスロ ブラックミクちゃん` はHAZUSE上2024-03-09の別境界候補として保持し、3/4群へ混入させない。

## 次回再開地点
1. 最新mainを再同期し、No.1632と本handoffの反映を再取得確認。
2. **No.1633候補 `パチスロ ガメラ2` — 2024-03-04** を性能コア + resetBehavior v0.7で処理する。
3. No.1633処理後、PB・別型式・地域先行・延期/段階導入を再監査して2024-03-04群をCLOSED判定する。
4. 遡及QAは `2007-07-09_genju-haou-t.md` まで完了。次QAカーソルはmainのmachines一覧を日付順再列挙して幻獣覇王直後の未QAレコードを確定してから処理する。推測で固定しない。
5. 新規機種は性能コア + resetBehavior v0.7を同時収集。欠損は表記揺れ/型式/メーカー/シリーズ名と検索語を変え、公式・業界・主要解析・旧DB・アーカイブ/回顧資料まで横断後のみUNVERIFIED。

## 今回の主要ソース
取得日: 2026-09-14

### チバリヨ2
- NET公式機種サイト: https://www.net-fun.co.jp/chibariyo2/
- 遊技日本 / P-WORLD業界ニュース: https://news.p-world.co.jp/articles/26997/nippon
- HAZUSE: https://hazuse.com/machine/pachislot/3S1495/
- なな徹 解析トップ: https://nana-press.com/kaiseki/machine/722/
- なな徹 朝一・設定変更: https://nana-press.com/kaiseki/machine/722/19940/
- なな徹 天井: https://nana-press.com/kaiseki/machine/722/19937/
- なな徹 有利区間: https://nana-press.com/kaiseki/machine/722/19941/
- 一撃: https://1geki.jp/slot/l_chibariyo2/
- 一撃 天井/設定変更: https://1geki.jp/slot/l_chibariyo2/3/
- 必勝本 基本スペック: https://p.hisshobon.jp/vpage/2610/2
- 必勝本 ボーナス: https://hisshobon.com/machineinfo/83198/
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/net_slot/190/kh01.php
- ぽこすろっと 朝一/据え置き/電源OFF ON: https://www.nankaikoya.jp/chibariyo2-kitaichi/
- Altema 朝一リセット: https://altema.jp/pachimo/lchibariyo2reset

### 直前群 / 次群監査継続用
- 2024-02-05群はNo.1621～1628の8/8 CLOSED。
- 2024-03-04群はNo.1629～1632の4/5処理済み。
- 次回はNo.1633 `パチスロ ガメラ2` から継続。