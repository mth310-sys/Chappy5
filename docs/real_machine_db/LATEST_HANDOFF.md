# 実機DB 最新リレー引継ぎ

更新日: 2026-09-04

## 現在地点

- recordCount: **604**
- latestMachineAdded: **マジカルハロウィン3**（KPE / 高砂製造版あり）
- latestRecord: `docs/real_machine_db/machines/2011-09-19_magical-halloween3.md`
- chronologicalFrontier: **2011-09-19**
- frontierLatestExactDateMachine: **マジカルハロウィン3**（09-19納品予定 / 09-20導入開始の定義差）
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の本線追加 — マジカルハロウィン3

- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前frontier「デルピエロ」、recursive machine treeを再取得して開始。
- 開始時正本は recordCount **603** / chronologicalFrontier **2011-09-19**。
- tree実パスで本機未登録を確認し、604件目として追加。
- グリーンべると（2011-08-26）は東日本大震災で販売延期され、**2011-09-19から納品開始予定**と明記。
- パチスロ必勝本、パチビー、HAZUSEは **2011-09-20導入開始**。`DATE_DEFINITION_DIFFERENCE`として両定義を保持し、時系列キーは最古の具体的市場投入日09-19を採用。
- K-Navi現行ページの「2011年6月20日」は、販売延期を伝える8月業界記事と複数9月資料に矛盾するため `CONFLICT_LIKELY_PAGE_METADATA_ERROR` として主時系列から除外。
- 型式は **マジカルハロウィン3N**、高砂製造版 **マジカルハロウィン3T5** も確認。同一スペックのため別機種として二重登録しない。N側検定番号 **0S1357**。

### 性能コア

- 5号機 / A+ART / セットストック型ART。
- 機械割: **96.9 / 98.8 / 101.3 / 104.4 / 109.2 / 113.8%**。
- BIG: **1/350.5 / 348.6 / 346.8 / 344.9 / 339.6 / 332.7**。
- REG: **1/397.2 / 392.4 / 378.8 / 374.5 / 354.2 / 332.7**。
- ボーナス合算: **1/186.2 / 184.6 / 181.0 / 179.6 / 173.4 / 166.3**。
- BIG **203枚**、REG **64枚**。
- ART「カボチャンス」: **1セット30G / 約+1.2枚/G**。
- 通常天井: **ボーナス間1280G**。CZ経由でスーパーカボチャンスへ。
- 通常時内部状態は **低確 / 高確A / 高確B / 高確C**。
- 50枚ベースは資料系統・検索語を変えて再探索したが、比較可能な直接値を確定できず **UNVERIFIED_AFTER_RESEARCH**。
- coreStatus: **COMPLETE_CORE_WITH_BASE_GAMES_UNVERIFIED**。

### resetBehavior v0.7

当時解析「設定変更&天井情報」から設定変更時の主要挙動を直接確定。

- 天井ゲーム数: **リセット**。
- 残りARTセット数: **消滅**。
- RT状態: **ボーナス後状態へ**。
- 液晶: **通常時なら引き継ぎ / ART中ならブーモリチェイスへ**。
- よって `gameCounterReset = CLEAR_ON_SETTING_CHANGE_CONFIRMED`。
- 通常天井1280Gの前日進捗消失、およびART残セット消失は設定変更時の不利要素として確定。
- 一方、低確/高確A/B/Cの設定変更時振り分け、据え置き、単純電源OFF→ON、ガックン/初期出目/ランプ等の一般的な変更判別は **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更専用の短縮天井、高確スタート保証、朝一特定G以内ART当選率は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 有利区間は制度導入前の5号機なので **NOT_APPLICABLE**。
- resetQaStatus: **PARTIAL_RESET_QA_WITH_SETTING_CHANGE_CORE_CONFIRMED**。

### CONFLICT / 定義差

- 導入日: グリーンべると **09-19納品開始予定** vs 必勝本/パチビー/HAZUSE **09-20導入開始**。平均化しない。
- K-Navi現行ページ **06-20** は震災延期の時系列と矛盾し、`CONFLICT_LIKELY_PAGE_METADATA_ERROR`。
- 型式: N / T5の2製造型式。公開スペック一致のため1レコードで保持。

## 遡及resetBehavior QA — ドカベンDまで前進

- recursive machine treeを再確認し、`2006-11_rocky-balboa-g.md` と `2006-11_thunder-v-special.md`（月キー版）はどちらも既にresetBehavior収集済みと判定。重複QAしない。
- その後の `2006-12_aqua-venus.md`、`2006-12_comic-world-oki.md` も既にresetBehavior節あり。
- 最初の実在resetBehavior欠損は **`docs/real_machine_db/machines/2006-12_dokaben-d.md`** と確定し、今回v0.7を追加。
- 既存性能値・CONFLICTは崩さず、`resetQaStatus: PARTIAL_RESET_QA_AFTER_RESEARCH`を別管理。

### ドカベンD reset QA結果

- パチマガスロマガ当時基本システムは5号機 / 4ライン / 3枚掛け専用、ボーナス主体 + MIDボーナス「ドカベンチャンス」を確認。
- 通常ゲーム数天井、天井RT、規定G数当選、長期ゲーム数モードを示す本機固有の高信頼資料は、検索語・資料系統を変えた再探索でも確認できず。
- そのため `gameCounterReset = NOT_APPLICABLE_NO_GAME_COUNT_CEILING_CONFIRMED_AFTER_RESEARCH`、`ceilingAfterReset = NOT_APPLICABLE_NO_PUBLIC_GAME_COUNT_CEILING_CONFIRMED` とした。
- 設定変更時の内部/表示状態、据え置き、単純電源OFF→ON、ガックン・初期出目・液晶等による変更判別は **UNVERIFIED_AFTER_RESEARCH**。一般的5号機挙動から補完しない。
- 設定変更専用恩恵/不利・公開朝一数値は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 既存機械割CONFLICT（5号機クロニクル vs pachinko's blog）はそのまま保持。

## 遡及QA次回再開地点

1. **ドカベンDまでresetBehavior v0.7補完済み**。
2. tree実パス順で次の候補 `docs/real_machine_db/machines/2006-12_linda-no-neraiuchi.md` を直接fetch。
3. 既にresetBehavior節があれば飛ばし、次の実在欠損へ進む。
4. resetBehaviorがあっても `UNVERIFIED` が古い一回検索のみのものは、QA対象として検索語/資料系統を変え、改善できる場合のみ追記する。
5. 既存COMPLETE_CORE/PARTIAL等の性能完了判定はreset QAの都合で不用意に変更しない。

## 本線の次回再開地点

1. **recordCount 604 / chronologicalFrontier 2011-09-19**から開始。
2. デルピエロ、マジカルハロウィン3を重複追加しない。
3. 2011-09-19納品 / 09-20導入群に残存未登録パチスロがないか最終監査。
4. 次にHAZUSEカレンダーの **09-26境界**を確認し、パチンコ混在を除外して最古の未登録パチスロを確定する。
5. tree実パス → 既存ファイル直接fetch → 未登録確認後に新規作成。code search未ヒットだけで未登録判定しない。
6. PARTIAL/UNVERIFIEDは表記揺れ・型式・メーカー・シリーズ名と設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックンを組み替えて再探索。
7. 競合値は平均せずCONFLICT。後継機値・一般則による補完は禁止。

## 主要出典 — 今回取得日 2026-09-04

### マジカルハロウィン3
- グリーンべると: `https://web-greenbelt.jp/00002205/`
- パチスロ必勝本 基本スペック: `https://p.hisshobon.jp/machine/1884/1/30884`
- パチスロ必勝本 設定変更&天井: `https://p.hisshobon.jp/machine/1884/1/30888`
- パチスロ必勝本 ART概要: `https://p.hisshobon.jp/machine/1884/1/30891`
- パチスロ必勝本 RT状態: `https://p.hisshobon.jp/machine/1884/1/31062`
- パチスロ必勝本 通常時モード: `https://p.hisshobon.jp/machine/1884/1/31493`
- パチマガスロマガ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kpe_slot/24/h.php`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6286`
- パチビー: `https://www.pachibee.jp/machines/index/211020005`
- HAZUSE: `https://hazuse.com/machine/pachislot/1S0457/`
- 5号機クロニクル: `https://5goki.com/kpe`
- 高砂T5実機資料: `https://www.nakaiti.com/html/sTakasago089.html`

### ドカベンD
- パチマガスロマガ基本システム: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/rodeo_slot/39/a.php`
- パチマガスロマガ機種トップ: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/rodeo_slot/39/rodeo_slot_39.php`
- K-Navi: `https://p-kn.com/slot/691/`
- 5号機クロニクル: `https://5goki.com/rodeo`
- pachinko's blog: `https://pachinko.hatenablog.jp/entry/2006/12/dokaben`
