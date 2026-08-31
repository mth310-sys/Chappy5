# 実機DB 最新リレー引継ぎ

更新日: 2026-08-31

## 現在地点

- 最新mainのREADME全文、最新ミッション v0.7、INDEX、LATEST_HANDOFF、既存レコードを再確認して継続。
- INDEXは旧19件地点のまま。README規定どおりLATEST_HANDOFFを進捗正本とする。
- **LATEST_HANDOFF基準145件。**
- 144件目 `マジカルハロウィン` の次候補 `Bun Bun Maru` を境界監査し、パチスロ5号機としての独立確認に至らなかったため誤登録せず保留。
- 2007年7月下旬候補を再監査した結果、`がんばれ元気` は当時業界記事で「2007-07-22から納品予定」と確認でき、7/23群より前へ遡るべき未登録機と判定。145件目として遡及追加した。
- 既存性能値はやり直さず、新規機の性能コア + v0.7 resetBehaviorを収集。

## 今回新規追加

### 145. がんばれ元気（ヤーマ）

- `docs/real_machine_db/machines/2007-07-22_ganbare-genki.md`
- releaseDate: `2007-07-22`
  - 2007-06-29グリーンべると: 納品は7月22日からスタート予定。
  - ALL7.jp: 2007-07-30導入予定。
  - P-Gabu: 2007-06-25導入日。
  - ベルコ公式製品アーカイブ: 2007年7月登場。
  - 具体日は競合のため平均せず保持し、時系列本線は当時業界記事の具体納品予定日を採用。
- systemType: ボーナス + ART（チャンピオンロード）
- coreStatus/status: `PARTIAL`
- qaResetBehavior: `PARTIAL`
- ボーナス合成: `1/327.68 → 1/237.45`。
- BIG合成: `1/712.35 → 1/564.97`、REG: `1/606.81 → 1/409.60`。
- BIG純増約312枚、REG純増約54枚。
- ART「チャンピオンロード」純増約`+1.5枚/G`。金は次回ボーナスまで、赤は111G。
- HAZUSEでは金:赤 約1:4.5、REG後ART突入約35%、赤ART完走後のARTループ約20%。
- 通常時天井は解析上「チャレンジファイト終了後950G」。天井CZでART失敗時はATへ移行し、AT時コイン持ち約75G/1000円という公開値あり。ただし通常時ベースとは混ぜない。
- 通常時50枚ベースは十分再探索したが比較可能値を確定できず `UNVERIFIED`。
- 機械割はK-Navi/HAZUSE等 `95.0/98.0/101.0/103.5/106.0/108.5%` と、パチマガスロマガのシミュレート `96.48/99.73/102.63/105.12/106.86/107.62%` が異なるため `CONFLICT`。
- 設定変更/据え置き/電源OFF→ONで950G天井進行、ART/CZ/AT状態をどう扱うかは本機固有の高信頼資料で確定できず `UNVERIFIED`。
- 朝一専用モード、短縮天井、設定変更固有恩恵/不利、ガックン/変更判別、公開朝一数値は `NONE_CONFIRMED / UNVERIFIED`。
- 有利区間は `NOT_APPLICABLE`。

## Bun Bun Maru 境界監査

- ALL7.jpは `Bun Bun Maru / 平和 / 2007-07-23` と掲載。
- しかし通常検索、平和系資料、検定系資料を再探索した範囲では「2007年平和のパチスロ5号機」として独立確認できない。
- 同時期に確実に確認できるのは平和のパチンコ `CRスーパーブンブン丸` 系。2007-05-25時点で検定通過情報があり、グリーンべるとでは納品2007-09-17開始とされる。
- よってALL7の混在一覧だけを根拠にパチスロDBへ登録しない。`Bun Bun Maru` は `UNRESOLVED / HOLD` とし、型式名・検定区分・当時P-WORLD等でパチスロ独立証拠が出た場合のみ再検討する。

## resetBehavior 遡及QA進捗

- 今回、古いレコードの `はいさい潮姫`（2005-12）と `ロード・オブ・ザ・リング`（2006-06）をmainで再確認。
- いずれもv0.7 `resetBehavior` / `qaResetBehavior: PARTIAL` が既に保存済みで、性能コア状態とリセットQA状態が分離されていることを確認。重複改変は行っていない。
- `はいさい潮姫`: 通常時天井/朝一専用モードはNONE_CONFIRMED、有利区間NOT_APPLICABLE、設定変更/電断固有挙動・ガックンはUNVERIFIED。
- `ロード・オブ・ザ・リング`: BIG+CB主体で通常時天井/RT/ART/朝一専用モードはNONE_CONFIRMED、有利区間NOT_APPLICABLE、ガックン等はUNVERIFIED。
- 次回も既存全レコードを古い順に確認し、`resetBehavior` 欠損を見つけた最古レコードから補完する。既に補完済みのものは再作成しない。

## 今回の主要出典

### がんばれ元気
- ベルコ公式: https://www.s-bellco.co.jp/products/slot/yama_genki/
- グリーンべると / P-WORLD: https://news.p-world.co.jp/articles/2267/greenbelt
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yama_slot/08/h.php
- HAZUSE: https://www.hazuse.com/i/data/ganbaregenki/top.htm
- K-Navi: https://p-kn.com/slot/604/
- CrankySeven基本/天井: https://crankyseven.com/ganbaregenki-pc.htm
- CrankySeven天井一覧: https://crankyseven.com/sp/tenjo-5ka.htm
- ALL7.jp: https://www.all7.jp/plans/index/2007/07
- P-Gabuヤーマ一覧: https://p-gabu.jp/guideworks/machine/maker/yama

### Bun Bun Maru監査
- ALL7.jp: https://www.all7.jp/plans/index/2007/07
- パチンコビレッジ検定情報: https://www.pachinkovillage.com/undefined/?id=1797
- P-WORLD / グリーンべると `スーパーブンブン丸`: https://news.p-world.co.jp/articles/2362/greenbelt

取得日: 2026-08-31

## 今回GitHub反映

- `がんばれ元気` 新規追加: `82e693cb7a262fae22b76035a982c8efdae26f29`
- 本LATEST_HANDOFF更新: このコミット

## 次回再開地点

1. **LATEST_HANDOFF基準145件地点から継続。まず2007-07-22〜07-23境界の漏れをもう一度短く監査し、問題なければ7月下旬未処理へ進む。**
2. `Bun Bun Maru` はパチスロ独立証拠がない限りHOLD。パチンコ `スーパーブンブン丸` を誤混入させない。
3. 次の新規候補は `ゲッターマウス`。ALL7では2007-07-30。ユニバーサル公式/当時業界記事/P-WORLD等で実導入日と性能を確認し、未登録なら性能コア + resetBehaviorを収集する。
4. `パチスロ北斗の拳2 乱世覇王伝 天覇の章` も7月下旬候補として具体納品日を継続監査する。
5. QAは古い既存レコードを順次確認し、`resetBehavior` 欠損を見つけた最古機から補完。既存COMPLETE_COREは性能完了判定として維持し、resetBehaviorQAを別管理する。
6. PARTIAL/UNVERIFIEDは表記揺れ・型式・メーカー・シリーズ名と `設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間` を組み替え、公式/業界/当時解析/古いDB/アーカイブ/回顧資料を十分再探索する。
7. INDEXは旧19件地点のため、README規定どおり**LATEST_HANDOFFの145件地点を正**として継続する。
