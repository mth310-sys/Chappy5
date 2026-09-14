更新日: 2026-09-14

## 現在地点
- recordCount: **1725**
- latestRecordAdded: **スマスロ 緑ドン VIVA!情熱南米編 REVIVAL — No.1725**
- latestRecordAddedPath: `docs/real_machine_db/machines/2025-05-07_smart-slot-midoridon-viva-revival.md`
- chronologicalFrontier: **2025-05-07**
- schema: **resetBehavior v0.7**
- status: **2025-05-07_GROUP_CLOSED_3_OF_3_CANONICAL_PROCESSED**

## 今回の進捗
- 最新mainの `README.md`、ミッションv0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前実レコードNo.1724を再同期。
- INDEXは旧表示のためREADME規定どおりLATEST_HANDOFF + 実レコードを進捗正本として使用。
- No.1724 `スマスロ ようこそ実力至上主義の教室へ` の次の未処理として、No.1725 `スマスロ 緑ドン VIVA!情熱南米編 REVIVAL`（2025-05-07）を追加。
- 性能コア + resetBehavior v0.7を保存。
- HAZUSEの2025年5月導入一覧と情報島の過去新台一覧を再照合し、2025-05-07のパチスロ本線は `Lパチスロ 機動戦士ガンダムSEED` / `スマスロ ようこそ実力至上主義の教室へ` / `スマスロ 緑ドン VIVA!情熱南米編 REVIVAL` の3機で一致したため、同日群をCLOSED 3/3とした。

## No.1725 — スマスロ 緑ドン VIVA!情熱南米編 REVIVAL
- path: `docs/real_machine_db/machines/2025-05-07_smart-slot-midoridon-viva-revival.md`
- manufacturer: **ユニバーサルブロス / UNIVERSAL ENTERTAINMENT**
- formalModel: **L／緑ドン5／FY**
- inspectionCode: **4S1737**
- releaseDate: **2025-05-07**
- payoutRate: **97.5 / 98.6 / 102.3 / 105.8 / 111.5 / 114.9%**
- bonusInitial: **1/275.4 / 1/274.0 / 1/267.3 / 1/251.1 / 1/229.9 / 1/223.4**
- AT: **1/561.0 / 1/555.7 / 1/502.0 / 1/464.4 / 1/424.3 / 1/400.8**
- base: **約33.2G/50枚**
- netIncrease: **AT約2.5枚/G / 擬似BONUS約4.5枚/G**

## No.1725 resetBehavior v0.7
- settingChange: **天井ゲーム数RESET、通常最大1280G→800G短縮。内部状態再抽選、全設定共通50.0%で高確。ビリゲ高確RESET。設定変更時有利区間RESETは機種別二次解析で確認。**
- carryOver: **純電断比較表で天井・内部状態・ビリゲ高確の引継ぎを確認し、据え置きも基本CARRY_OVERとして管理。ただし据え置き単独直接表記は `DIRECT_UNTOUCHED_WORDING_NOT_FOUND_AFTER_RESEARCH`。**
- powerCycle: **天井までのG数・内部状態・ビリゲ高確を引継ぎ。ステージは必勝本で調査中。有利区間CARRY_OVERは機種別二次解析のみのためANALYSIS_SINGLE。**
- ceilingBenefit: **ボーナス/AT間1280G→設定変更後800G。到達時EXTRA BIG以上、33.2%でロングフリーズ。**
- state: **設定変更時高確50.0%（全設定共通）。純電断は状態引継ぎ。通常/高確/超高確のフル振り分けは高確50%以外PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。**
- detection: **朝一800G超えで天井非発動は据え置き推測の強材料。高確示唆は単独確定不可。固有ガックンは再探索後もUNVERIFIED_AFTER_RESEARCH。**
- conflict: **50枚ベースは主要複数資料33.2G、単一立ち回り資料32.5G。33.2Gをcanonical、32.5GをCONFLICT保持。**

## 2025-05-07境界 — CLOSED 3/3
1. Lパチスロ 機動戦士ガンダムSEED — No.1723 DONE
2. スマスロ ようこそ実力至上主義の教室へ — No.1724 DONE
3. スマスロ 緑ドン VIVA!情熱南米編 REVIVAL — No.1725 DONE

## 次回再開地点
- 最新mainを再同期しNo.1725と本handoffを確認。
- **No.1726候補 `花笠` — 2025-05-19** から再開する。
- 同日群の次候補は **`L ToLOVEるダークネス TRANCE ver.8.7` — 2025-05-19**。
- HAZUSE 2025年5月導入一覧では2025-05-19のパチスロは現時点で上記2機。両機処理後、PB・地域先行・別型式・延期/段階導入を再監査して同日境界をCLOSED判定する。
- 各機種は設定変更/据え置き/電源OFF→ON、ゲーム数/ポイント/天井、モード/状態、有利区間、朝一恩恵/不利、変更判別、公開朝一数値を独立管理する。
- PARTIAL/UNVERIFIEDは表記揺れ・正式型式・メーカー・シリーズ名、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間へ検索語を変え、公式・業界・主要解析・旧DB・アーカイブ/回顧資料横断後のみ確定する。

## resetBehavior 遡及QA
- 既処理確認済みカーソル: `2007-07-09_genju-haou-t.md`（幻獣覇王T）。
- 新規収集を止めず、実体レコード順から最初のresetBehavior欠損レコードを安全に確定できた時点で遡及更新する。
- 既存COMPLETE_COREの性能完了判定は変更しない。reset QA状態を別管理する。

## 今回の主要ソース
取得日: 2026-09-14
- ユニバーサル公式製品ページ: https://www.universal-777.com/product/slot/midoridon_viva_revival/
- HAZUSE 機種DB: https://hazuse.com/machine/pachislot/4S1737/
- HAZUSE 2025年5月導入一覧: https://hazuse.com/new-machine/202505-2/
- 情報島 過去の新台情報: https://p-johojima.jp/machine_spec/post-2074/
- 1geki 機種ページ: https://1geki.jp/slot/l_mdn/
- 1geki 天井・朝一: https://1geki.jp/slot/l_mdn/3/
- 必勝本 天井&設定変更: https://hisshobon.com/machineinfo/86508/
- 必勝本 状態移行抽選: https://hisshobon.com/machineinfo/86498/
- ちょんぼりすた: https://chonborista.com/slot/universal-slot/231722/
- なな徹 リセット狙い: https://nana-press.com/kaiseki/machine/936/29337/
- ぽこすろっと（有利区間比較補助）: https://www.nankaikoya.jp/midoridon-revival-kitaichi/
