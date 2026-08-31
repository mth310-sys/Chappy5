# 実機DB 最新リレー引継ぎ

更新日: 2026-09-01

## 現在地点

- 最新mainのREADME、実機DBミッションv0.7、INDEX、既存レコード、直前HANDOFFを確認して継続。
- INDEXは旧19件地点のままなので、README規定どおりLATEST_HANDOFFを進捗正本とする。
- 161件目 `KODA KUMI PACHISLOT LIVE IN HALL`（2007-09-17）までの既存進捗を引継ぎ。
- 2007-09-18〜09-23を当時業界記事・メーカー/旧DBで境界監査し、09-24より前へ差し込む未処理実導入機を今回確認できず。
- **162件目 `ドリスタ -ミントのヒロイン救出大作戦-`（NET、2007-09-24）を新規登録。**
- 新規レコード: `docs/real_machine_db/machines/2007-09-24_dream-star-mint.md`
- coreStatus: `COMPLETE_CORE`
- resetBehaviorQA: `PARTIAL`
- 新規レコードcommit: `048c1b98b6fcf895b964db56b32285d25dffe517`
- resetBehavior遡及QAは `ロックユークイーン3`（2006-04）まで進行。
- ロックユークイーン3 QA commit: `bf7f911f7688a06cf18b2ba1555e9db3cb279d3a`

## 162. ドリスタ -ミントのヒロイン救出大作戦-

- manufacturer: NET（ネット）
- formalModelName: `ドリスタA1`
- releaseDate: `2007-09-24`
  - 2007-08-31グリーンべると当時記事が「納品は9月24日からスタートの予定」と明記。
- generation: 5号機
- systemType: ボーナス + ART / 1Gチャンスゾーン

### 性能コア

- 設定: 1 / 3 / 5 / 7
- BIG合算: `1/297.8 / 1/275.3 / 1/256.0 / 1/250.1`
- MINT BONUS: `1/394.7 / 1/366.1 / 1/312.0 / 1/267.4`
- 全ボーナス合算: 当時業界記事で約 `1/169 → 1/129`
- 1000円あたり: **約32〜33G**
- 赤7BIG: 約308枚
- 青7BIG: 約256枚
- MINT BONUS: 平均約100枚
- ART `スーパーミントタイム`: **150G / 約+0.4枚/G / 完走増加見込み約60枚**
- 通常時ハット（シングル役）後の1G `MINT CHANCE` からARTへ。2007年当時記事ではMINT CHANCE中の対象1枚役は約1/6。

### 機械割 CONFLICT

平均せず保持:

- K-Navi: `98 / 100 / 104 / 108%`
- pachinko’s blog旧機種整理: `95.0 / 98.4 / 102.8 / 108.0%`
- 5号機クロニクル: `98.1 / 101.6 / 106.0 / 110.8%`

5号機クロニクルは本機のART名称・基本獲得性能説明にNET公式/2007年当時記事との不整合があるため、コア根拠には使わず競合比較のみ。

### v0.7 resetBehavior

`ドリスタ / ドリスタA1 / ミントのヒロイン救出大作戦 / NET / ネット` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / ミントチャンス / スーパーミントタイム / ガックン` を組み替え、公式・業界記事・旧攻略/DBを再探索。

- 通常時ゲーム数天井: `NONE_CONFIRMED`
- リセット専用短縮天井: `NONE_CONFIRMED`
- 朝一専用モード/設定変更専用モード: `NONE_CONFIRMED`
- 朝一特定G以内当選率/リセット恩恵率: `NONE_CONFIRMED`
- 有利区間: `NOT_APPLICABLE`
- 設定変更時のMINT CHANCE/ART状態・ART残G処理: `UNVERIFIED`
- 据え置き時のCZ/ART状態・残G引継ぎ: `UNVERIFIED`
- 電源OFF→ON時のCZ/ART状態・残G処理: `UNVERIFIED`
- 本機固有のガックン/出目/液晶等による変更判別: `UNVERIFIED`
- 設定変更挙動から電断挙動を推定転記しない。

## 今回のresetBehavior遡及QA

### ロックユークイーン3（エレコ / アルゼ、2006-04）

- `docs/real_machine_db/machines/2006-04_rock-you-queen-3.md`
- qaResetBehavior: `PARTIAL`
- 1000Gは通常時ハマリ天井ではなくRT `QUEEN GAME` の最大継続上限と明確化。
- 通常時天井: `NONE_CONFIRMED`
- リセット専用短縮天井: `NONE_CONFIRMED`
- 有利区間: `NOT_APPLICABLE`
- 設定変更時のRT残G・内部RT状態: `UNVERIFIED`
- 据え置き時のRT状態引継ぎ: `UNVERIFIED`
- 電源OFF→ON時のRT状態処理: `UNVERIFIED`
- 本機固有の設定変更判別: `UNVERIFIED`
- 公開朝一専用数値: `NONE_CONFIRMED`

## 今回主要出典

### ドリスタ
- NET公式: https://www.net-fun.co.jp/dresta/
- NET公式ボーナス: https://www.net-fun.co.jp/dresta/index05.html
- グリーンべると: https://web-greenbelt.jp/00004270/
- K-Navi: https://p-kn.com/slot/645/
- pachinko’s blog: https://pachinko.hatenablog.jp/entry/2007/09/dream-star
- P-WORLD: https://www.p-world.co.jp/machine/database/4888
- 5号機まとめwiki: https://w.atwiki.jp/5gouki/pages/108.html
- 5号機クロニクル: https://5goki.com/net

### ロックユークイーン3 reset QA
- グリーンべると: https://web-greenbelt.jp/00004599/
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eleco_slot/60/k.php
- HAZUSE: https://www.hazuse.com/i/det2/rockyouqueen/top.htm
- パチ7回顧: https://pachiseven.jp/articles/detail/14341

取得日: 2026-09-01

## 次回再開地点

1. **LATEST_HANDOFF基準162件地点から継続。まず2007-09-25前後を監査。**
2. `エリア88A`（イレブン）は古い資料に2007-09-25発売表記があるため、一次/別系統資料で実導入日を照合し、09-25の最古未処理なら163件目として性能コア＋v0.7 resetBehaviorを収集する。
3. `戦慄-IF IT HAPPEN（戦慄DD）` の2007年9月内具体導入日を引き続き公式/業界/旧DBで詰め、エリア88Aより早ければ時系列へ差し込む。
4. その他9月候補 `DIGIParadise / くりぃむしちゅー / ちょいスゴ!!アリババインファンタジア / ぱちすろおり姫は告知がお好き / めんそーれ2-30 / クレイジージョーカー / コータローまかりとおる! / サザンドリーム / ザ・ドゥーナッツのトンdeピース / ハイサイネオ / バリバリ伝説 / マスクオブゾロ / 学習パチスロ国語 / 春夏秋冬 / 時空大作戦 / 熊酒場30` は具体導入日を確定して時系列に差し込む。
5. resetBehavior遡及QAは、**ロックユークイーン3の次の最古未補完既存レコード**から継続する。
6. `Bun Bun Maru-L / -R` は2007年5号機としての独立証拠が弱いため `UNRESOLVED / HOLD` 継続。別機種/パチンコとの混同を避ける。
